import React from "react";
import { groups } from "../data/groups";
import { Link } from "react-router-dom";

const Groups = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8">World Cup Groups</h1>

      <div className="grid gap-6">
        {groups.map((group) => (
          <div
            key={group.id}
            className="
    bg-slate-800
    rounded-xl
    p-4
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:shadow-2xl
    hover:shadow-green-500/10
  "
          >
            <h2 className="text-2xl font-bold mb-4">Group {group.id}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="py-2">Team</th>
                    <th>P</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>Pts</th>
                  </tr>
                </thead>

                <tbody>
                  {group.teams.map((team, index) => (
                    <tr
                      key={team.id}
                      className={index < 2 ? "bg-green-900/30" : ""}
                    >
                      <td className="py-2">
                        <Link
                          to={`/teams/${team.id}`}
                          className="hover:text-blue-400 transition"
                        >
                          {team.name}
                        </Link>
                      </td>
                      <td>{team.played}</td>
                      <td>{team.won}</td>
                      <td>{team.draw}</td>
                      <td>{team.lost}</td>
                      <td>{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-green-400 mt-3">
        Top 2 teams qualify for knockout stage
      </p>
    </div>
  );
};

export default Groups;
