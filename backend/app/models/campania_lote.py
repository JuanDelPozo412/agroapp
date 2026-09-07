from app import db

class CampaniaLote(db.Model):
    __tablename__ = "campania_lotes"
    __table_args__ = (db.UniqueConstraint("campania_id", "lote_id"),)

    id = db.Column(db.Integer, primary_key=True)
    campania_id = db.Column(db.Integer, db.ForeignKey("campanias.id"), nullable=False)
    lote_id = db.Column(db.Integer, db.ForeignKey("lotes.id"), nullable=False)
    cultivo = db.Column(db.String(100))