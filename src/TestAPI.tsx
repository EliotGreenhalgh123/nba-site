import { useEffect, useState } from "react";
import { fetchTeams, fetchPlayers, fetchPlayerStats } from "./api/nba";

export default function TestApi() {
    const [teams, setTeams] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function run() {
            try {
                console.log("Fetching teams...");
                const data = await fetchTeams();
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
            <h1>API Test Successful</h1>
            <p>Fetched {teams.length} teams.</p>
        </div>
    );
}
