from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from app.config import Config



db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)

    from app.models import temporada, lote, campania, campania_lote, categoria_gasto, gasto, ingreso
    from app.routes.lote_routes import lote_bp
    
    app.register_blueprint(lote_bp)

    return app