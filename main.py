import uvicorn
from fastapi import FastAPI, Response
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import List, Optional
from io import BytesIO
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
import datetime
import random

class Item(BaseModel):
    description: str
    quantity: float
    rate: float

class InvoiceData(BaseModel):
    invoice_number: str
    from_address: str
    bill_to_address: str
    date: str
    due_date: str
    po_number: Optional[str] = None
    discount: float = 0.0
    discount_type: str = "fixed"
    items: List[Item]
    notes: Optional[str] = None
    tax_rate: float = 0.0

app = FastAPI()

def generate_invoice_number():
    year = datetime.datetime.now().year
    random_part = ''.join([str(random.randint(0, 9)) for _ in range(10)])
    return f"INV/{year}/{random_part}"

@app.get("/next-invoice-number")
async def next_invoice_number():
    return JSONResponse({"invoice_number": generate_invoice_number()})

@app.post("/invoice")
async def generate_invoice(invoice_data: InvoiceData):
    buffer = BytesIO()
    p = canvas.Canvas(buffer, pagesize=letter)
    width, height = letter

    p.setFont("Helvetica-Bold", 18)
    p.drawString(50, height - 50, "INVOICE")

    p.drawRightString(width - 50, height - 45, f"#{invoice_data.invoice_number}")

    p.setFont("Helvetica-Bold", 10)
    p.drawString(50, height - 100, "Dari:")
    p.drawString(250, height - 100, "Tagihan Untuk:")

    p.setFont("Helvetica", 10)
    from_address_lines = invoice_data.from_address.split('\n')
    y = height - 115
    for line in from_address_lines:
        p.drawString(50, y, line)
        y -= 15

    bill_to_address_lines = invoice_data.bill_to_address.split('\n')
    y = height - 115
    for line in bill_to_address_lines:
        p.drawString(250, y, line)
        y -= 15

    info_y = height - 100
    p.setFont("Helvetica-Bold", 10)
    p.drawRightString(width - 150, info_y, "Tanggal:")
    p.drawRightString(width - 150, info_y - 20, "Jatuh Tempo:")
    if invoice_data.po_number:
        p.drawRightString(width - 150, info_y - 40, "Nomor PO:")

    p.setFont("Helvetica", 10)
    p.drawRightString(width - 50, info_y, invoice_data.date)
    p.drawRightString(width - 50, info_y - 20, invoice_data.due_date)
    if invoice_data.po_number:
        p.drawRightString(width - 50, info_y - 40, invoice_data.po_number)


    header_y = height - 250
    p.setFont("Helvetica-Bold", 10)
    p.drawString(50, header_y, "Barang/Jasa")
    p.drawRightString(width - 250, header_y, "Jumlah")
    p.drawRightString(width - 150, header_y, "Harga")
    p.drawRightString(width - 50, header_y, "Total")
    p.line(50, header_y - 5, width - 50, header_y - 5)

    item_y = header_y - 20
    subtotal = 0
    p.setFont("Helvetica", 10)
    for item in invoice_data.items:
        amount = item.quantity * item.rate
        subtotal += amount
        p.drawString(50, item_y, item.description)
        p.drawRightString(width - 250, item_y, str(item.quantity))
        p.drawRightString(width - 150, item_y, f"Rp{item.rate:.0f}")
        p.drawRightString(width - 50, item_y, f"Rp{amount:.0f}")
        item_y -= 20

    totals_y = item_y - 20
    p.line(width - 200, totals_y, width - 50, totals_y)
    totals_y -= 20
    
    if invoice_data.discount_type == 'percentage':
        discount_amount = subtotal * (invoice_data.discount / 100)
        discount_display = f"{invoice_data.discount}%"
    else:
        discount_amount = invoice_data.discount
        discount_display = f"-Rp{discount_amount:.0f}"

    discounted_subtotal = subtotal - discount_amount
    tax = discounted_subtotal * (invoice_data.tax_rate / 100)
    total = discounted_subtotal + tax

    p.setFont("Helvetica-Bold", 10)
    p.drawRightString(width - 150, totals_y, "Subtotal:")
    p.drawRightString(width - 150, totals_y - 20, "Diskon:")
    p.drawRightString(width - 150, totals_y - 40, f"Pajak ({invoice_data.tax_rate}%):")
    p.drawRightString(width - 150, totals_y - 60, "Total:")

    p.setFont("Helvetica", 10)
    p.drawRightString(width - 50, totals_y, f"Rp{subtotal:.0f}")
    p.drawRightString(width - 50, totals_y - 20, discount_display)
    p.drawRightString(width - 50, totals_y - 40, f"Rp{tax:.0f}")
    p.setFont("Helvetica-Bold", 10)
    p.drawRightString(width - 50, totals_y - 60, f"Rp{total:.0f}")

    notes_y = totals_y - 120
    if invoice_data.notes:
        p.setFont("Helvetica-Bold", 10)
        p.drawString(50, notes_y, "Catatan:")
        p.setFont("Helvetica", 10)
        p.drawString(50, notes_y - 15, invoice_data.notes)

    p.setFont("Helvetica", 8)
    p.drawCentredString(width / 2, 30, "Dibuat dengan Freelyce Invoice Generator")

    p.showPage()
    p.save()

    buffer.seek(0);
    return Response(content=buffer.getvalue(), media_type="application/pdf", headers={
        "Content-Disposition": f"attachment; filename=invoice-{invoice_data.invoice_number}.pdf"
    })


@app.get("/")
async def get_index():
    return FileResponse('static/index.html', media_type='text/html')

app.mount("/static", StaticFiles(directory="static"), name="static")


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
