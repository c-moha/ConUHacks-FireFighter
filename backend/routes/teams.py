from flask import Blueprint, jsonify, request
from models import FirefighterTeam, db

teams_bp = Blueprint("teams", __name__)


@teams_bp.route("/teams", methods=["GET"])
def get_teams():
    teams = FirefighterTeam.query.all()
    return jsonify(
        [
            {
                "id": team.id,
                "name": team.name,
                "status": team.status,
                "location": team.location,
                "capacity": team.capacity,
            }
            for team in teams
        ]
    )


@teams_bp.route("/teams", methods=["POST"])
def add_team():
    data = request.json
    new_team = FirefighterTeam(
        name=data["name"],
        status=data["status"],
        location=data.get("location"),
        capacity=data["capacity"],
    )
    db.session.add(new_team)
    db.session.commit()
    return jsonify({"message": "Team added successfully"}), 201
