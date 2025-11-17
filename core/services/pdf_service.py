import datetime
import random
import base64
from io import BytesIO
from PIL import Image
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.lib.utils import ImageReader
from core.schemas.invoice import Invoice

def generate_invoice_number():
    year = datetime.datetime.now().year
    random_part = ''.join([str(random.randint(0, 9)) for _ in range(10)])
    return f"INV/{year}/{random_part}"

def generate_invoice_pdf(invoice_data: Invoice):
    buffer = BytesIO()
    p = canvas.Canvas(buffer, pagesize=letter)
    width, height = letter
    draw_height = 0

    p.setFont("Helvetica-Bold", 18)
    p.drawString(50, height - 50, "INVOICE")
    p.drawRightString(width - 50, height - 50, f"#{invoice_data.invoice_number}")

    y_after_title = height - 70
    if invoice_data.logo:
        try:
            header, encoded = invoice_data.logo.split(",", 1)
            image_data = base64.b64decode(encoded)
            image_file = BytesIO(image_data)
            img = Image.open(image_file)
            
            img_width, img_height = img.size
            aspect = img_height / float(img_width)
            draw_width = 70
            draw_height = draw_width * aspect
            
            p.drawImage(ImageReader(img), 50, y_after_title - draw_height, width=draw_width, height=draw_height, mask='auto')
        except Exception as e:
            print(f"Error processing logo: {e}")

    y_position = y_after_title - draw_height - 20

    p.setFont("Helvetica-Bold", 10)
    p.drawString(50, y_position, "Dari:")
    p.drawString(250, y_position, "Tagihan Untuk:")

    p.setFont("Helvetica", 10)
    from_address_lines = invoice_data.from_address.split('\n')
    y = y_position - 15
    for line in from_address_lines:
        p.drawString(50, y, line)
        y -= 15
    from_address_end_y = y

    bill_to_address_lines = invoice_data.bill_to_address.split('\n')
    y = y_position - 15
    for line in bill_to_address_lines:
        p.drawString(250, y, line)
        y -= 15
    bill_to_address_end_y = y

    info_y = y_position
    p.setFont("Helvetica-Bold", 10)
    p.drawRightString(width - 150, info_y, "Tanggal:")
    p.drawRightString(width - 150, info_y - 20, "Jatuh Tempo:")
    if invoice_data.po_number:
        p.drawRightString(width - 150, info_y - 40, "Nomor PO:")

    p.setFont("Helvetica", 10)
    
    def format_date_to_indonesian(date_str):
        if not date_str:
            return ""
        try:
            date_obj = datetime.datetime.strptime(date_str, "%Y-%m-%d")
            months_indonesian = [
                "Januari", "Februari", "Maret", "April", "Mei", "Juni",
                "Juli", "Agustus", "September", "Oktober", "November", "Desember"
            ]
            return date_obj.strftime(f"%d {months_indonesian[date_obj.month - 1]} %Y")
        except ValueError:
            return date_str

    formatted_date = format_date_to_indonesian(invoice_data.date)
    formatted_due_date = format_date_to_indonesian(invoice_data.due_date)

    p.drawRightString(width - 50, info_y, formatted_date)
    p.drawRightString(width - 50, info_y - 20, formatted_due_date)
    if invoice_data.po_number:
        p.drawRightString(width - 50, info_y - 40, invoice_data.po_number)

    header_y = min(from_address_end_y, bill_to_address_end_y) - 40
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

    buffer.seek(0)
    return buffer
