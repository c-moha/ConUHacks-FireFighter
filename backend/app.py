from flask import Flask
from flask_cors import CORS
from flask_socketio import SocketIO
from models import db
from routes.incidents import incidents_bp
from routes.teams import teams_bp

socketio = SocketIO(cors_allowed_origins="*")


def create_app():
    """Flask Application Factory"""
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = (
        "postgresql://username:password@localhost/firefighter_db"
    )
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    # Initialize Extensions
    db.init_app(app)
    CORS(app)
    socketio.init_app(app)

    # Register Blueprints (API Routes)
    app.register_blueprint(incidents_bp, url_prefix="/api/incidents")
    app.register_blueprint(teams_bp, url_prefix="/api/teams")

    return app

app = create_app()