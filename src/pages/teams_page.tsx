import { useEffect, useState } from "react";
import { getTeams } from "../api/nba";

export default function TeamsPage() {
    const [teams, setTeams] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function run() {
            try {
                console.log("Fetching teams...");
                const data = await getTeams();
                console.log("Teams:", data);
                setTeams(data);
            } catch (err: any) {
                console.error(err);
                setError(err.message);
            }
        }
        run();
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (!teams) return <div>Loading…check console</div>;

    return (
        <div>
            <h1>NBA Teams</h1>
            <ul>
                {teams.map((team: any) => (
                    <li key={team.id}>{team.name}</li>
                ))}
            </ul>
        </div>
    )

}
