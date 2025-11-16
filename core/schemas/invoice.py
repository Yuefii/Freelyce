from pydantic import BaseModel
from typing import List, Optional
from core.schemas.item import Item

class Invoice(BaseModel):
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
    logo: Optional[str] = None
