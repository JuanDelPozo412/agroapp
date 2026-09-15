from flask import request, jsonify
from app.services import lote_service


def get_all_lotes ():
    Lotes = lote_service.get_all_lotes()
    return jsonify([lote.to_dict() for lote in Lotes]), 200

def get_lote_by_id(lote_id):
    Lote = lote_service.get_Lote_by_id(lote_id)
    if Lote:
        return jsonify(Lote.to_dict()), 200
    else:
        return jsonify({"message": "Lote no encontrado"}), 404


def create_lote():
    data = request.get_json()
    nombre = data.get("nombre")
    hectareas = data.get("hectareas")
    ubicacion = data.get("ubicacion")
    Lote = lote_service.create_lote(nombre, hectareas, ubicacion)
    return jsonify(Lote.to_dict()), 201

def delete_lote(lote_id):
    Lote = lote_service.delete_lote(lote_id)
    if Lote:
        return jsonify({"message": "Lote eliminado correctamente"}), 200
    else:
        return jsonify({"message": "Lote no encontrado"}), 404

def update_lote(lote_id):
    data = request.get_json()
    nombre = data.get("nombre")
    hectareas = data.get("hectareas")
    ubicacion = data.get("ubicacion")
    Lote = lote_service.update_lote(lote_id, nombre, hectareas, ubicacion)
    if Lote:
        return jsonify(Lote.to_dict()), 200
    else:
        return jsonify({"message": "Lote no encontrado"}), 404
