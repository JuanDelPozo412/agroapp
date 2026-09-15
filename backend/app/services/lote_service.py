from app import db
from app.models.lote import Lote


def get_all_lotes():
    return Lote.query.all()

def get_Lote_by_id(lote_id):
    return Lote.query.get(lote_id)

def create_lote(nombre, hectareas, ubicacion):
    lote = Lote(nombre=nombre, hectareas=hectareas, ubicacion=ubicacion)
    db.session.add(lote)
    db.session.commit()
    return lote

def delete_lote(lote_id):
    lote = Lote.query.get(lote_id)
    if lote:
        db.session.delete(lote)
        db.session.commit()
    return lote

def update_lote(lote_id, nombre=None, hectareas=None, ubicacion=None):
    lote = Lote.query.get(lote_id)
    if lote:
        if nombre is not None:
            lote.nombre = nombre
        if hectareas is not None:
            lote.hectareas = hectareas
        if ubicacion is not None:
            lote.ubicacion = ubicacion
        db.session.commit()
    return lote