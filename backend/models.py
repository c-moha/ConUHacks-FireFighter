from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class FirefighterTeam(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    status = db.Column(
        db.String(20), nullable=False
    )  # "Available", "Deployed", "Resting"
    location = db.Column(db.String(100), nullable=True)
    capacity = db.Column(db.Integer, nullable=False)


class Incident(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    severity = db.Column(db.String(20), nullable=False)  # "Low", "Moderate", "High"
    status = db.Column(db.String(20), nullable=False)  # "Active", "Resolved"
    resources_required = db.Column(db.Integer, nullable=False)
