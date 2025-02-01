import numpy as np


def optimize_deployment(teams, incidents):
    """
    Simple optimization logic: Assign available teams to the highest-priority incidents.
    """
    available_teams = [team for team in teams if team["status"] == "Available"]
    active_incidents = [
        incident for incident in incidents if incident["status"] == "Active"
    ]

    assignments = []
    for incident in sorted(active_incidents, key=lambda x: x["severity"], reverse=True):
        if available_teams:
            team = available_teams.pop(0)
            assignments.append(
                {
                    "team_id": team["id"],
                    "incident_id": incident["id"],
                }
            )
    return assignments
