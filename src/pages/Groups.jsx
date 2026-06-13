import { groups } from "../data/groups";
import { Link } from "react-router-dom";

const Groups = () => {
  return (
    <div className="page-shell">
      <div className="page-header">
        <div>
          <p className="eyebrow">Standings</p>
          <h1 className="page-title">World Cup Groups</h1>
          <p className="page-subtitle">
            Top two teams in each group qualify for the knockout stage.
          </p>
        </div>
      </div>

      <div className="mb-6 rounded-3xl border border-teal-300/20 bg-teal-300/10 p-5 text-sm font-semibold leading-7 text-slate-300">
        <span className="font-black text-teal-200">Qualification note:</span>{" "}
        the top two teams in every group are highlighted and move into the
        knockout stage.
      </div>

      <div className="groups-layout">
        {groups.map((group) => (
          <div key={group.id} className="group-card">
            <div className="group-card-header">
              <div className="flex items-center gap-4">
                <div className="group-badge">{group.id}</div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                    Group
                  </p>
                  <h2 className="text-2xl font-black text-white">
                    Group {group.id}
                  </h2>
                </div>
              </div>
              <span className="qualification-pill">Top 2 qualify</span>
            </div>

            <div className="overflow-x-auto">
              <table className="group-table">
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>P</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>Pts</th>
                  </tr>
                </thead>

                <tbody>
                  {group.teams.map((team, index) => (
                    <tr key={team.id}>
                      <td className="team-cell">
                        <span className="team-seed">{index + 1}</span>
                        <Link
                          to={`/teams/${team.id}`}
                          className="font-semibold text-white transition hover:text-teal-300"
                        >
                          {team.name}
                        </Link>
                      </td>
                      <td>{team.played}</td>
                      <td>{team.won}</td>
                      <td>{team.draw}</td>
                      <td>{team.lost}</td>
                      <td className="points-cell">{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;
