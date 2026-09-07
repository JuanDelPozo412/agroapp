from app import db

class Campania(db.Model):
    __tablename__ = "campanias"

    id = db.Column(db.Integer, primary_key=True)
    temporada_id = db.Column(db.Integer, db.ForeignKey("temporadas.id"), nullable=False)
    nombre = db.Column(db.String(100), nullable=False)
    descripcion = db.Column(db.Text)
    estado = db.Column(db.String(20), default="activa")
    created_at = db.Column(db.DateTime, server_default=db.func.now())