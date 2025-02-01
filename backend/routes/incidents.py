from flask import Blueprint, jsonify, request
from models import Incident, db

incidents_bp = Blueprint("incidents", __name__)


@incidents_bp.route("/incidents", methods=["GET"])
def get_incidents():
    incidents = Incident.query.all()
    return jsonify(
        [
            {
                "id": incident.id,
                "latitude": incident.latitude,
                "longitude": incident.longitude,
                "severity": incident.severity,
                "status": incident.status,
                "resources_required": incident.resources_required,
            }
            for incident in incidents
        ]
    )


@incidents_bp.route("/incidents", methods=["POST"])
def add_incident():
    data = request.json
    new_incident = Incident(
        latitude=data["latitude"],
        longitude=data["longitude"],
        severity=data["severity"],
        status=data["status"],
        resources_required=data["resources_required"],
    )
    db.session.add(new_incident)
    db.session.commit()
    return jsonify({"message": "Incident added successfully"}), 201
