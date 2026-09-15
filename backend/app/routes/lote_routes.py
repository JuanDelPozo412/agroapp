from flask import Blueprint
from app.controllers import lote_controller

lote_bp = Blueprint("lote_bp", __name__)

lote_bp.route("/lotes", methods=["GET"])(lote_controller.get_all_lotes)
lote_bp.route("/lotes/<int:lote_id>", methods=["GET"])(lote_controller.get_lote_by_id)
lote_bp.route("/lotes", methods=["POST"])(lote_controller.create_lote)
lote_bp.route("/lotes/<int:lote_id>", methods=["DELETE"])(lote_controller.delete_lote)
lote_bp.route("/lotes/<int:lote_id>", methods=["PUT"])(lote_controller.update_lote)
