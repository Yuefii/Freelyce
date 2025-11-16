import uvicorn
from fastapi import FastAPI, Response
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from core.models import InvoiceData
from core.services.pdf_service import generate_invoice_number, generate_invoice_pdf

app = FastAPI()

@app.get("/next-invoice-number")
async def next_invoice_number():
    return JSONResponse({"invoice_number": generate_invoice_number()})

@app.post("/invoice")
async def generate_invoice(invoice_data: InvoiceData):
    buffer = generate_invoice_pdf(invoice_data)
    return Response(content=buffer.getvalue(), media_type="application/pdf", headers={
        "Content-Disposition": f"attachment; filename=invoice-{invoice_data.invoice_number}.pdf"
    })

@app.get("/")
async def get_index():
    return FileResponse('static/index.html', media_type='text/html')

app.mount("/static", StaticFiles(directory="static"), name="static")

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
