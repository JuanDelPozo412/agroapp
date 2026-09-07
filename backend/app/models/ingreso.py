from app import db

class Ingreso(db.Model):
    __tablename__ = "ingresos"

    id = db.Column(db.Integer, primary_key=True)
    campania_id = db.Column(db.Integer, db.ForeignKey("campanias.id"), nullable=False)
    lote_id = db.Column(db.Integer, db.ForeignKey("lotes.id"))
    descripcion = db.Column(db.String(255), nullable=False)
    comprador = db.Column(db.String(255))
    monto = db.Column(db.Numeric(12, 2), nullable=False)
    fecha = db.Column(db.Date, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())