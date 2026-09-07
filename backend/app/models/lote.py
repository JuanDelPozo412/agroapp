from app import db

class Lote(db.Model):
    __tablename__ = "lotes"

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    hectareas = db.Column(db.Numeric(10, 2), nullable=False, default=0)
    ubicacion = db.Column(db.Text)
    created_at = db.Column(db.DateTime, server_default=db.func.now())