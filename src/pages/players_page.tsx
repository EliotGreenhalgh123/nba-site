import { useEffect, useState } from "react";
import { getPlayers } from "../api/nba";

export default function PlayersPage() {
    const [players, setPlayers] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function run() {
            try {
                console.log("Fetching players...");
                const data = await getPlayers();
                console.log("Players:", data);
                setPlayers(data);
            } catch (err: any) {
                console.error(err);
                setError(err.message);
            }
        }
        run();
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (!players) return <div>Loading…check console</div>;

    return (
        <div>
            <h1>NBA Players</h1>
            <ul>
                {players.map((player: any) => (
                    <li key={player.id}>{player.first_name} {player.last_name}</li>
                ))}
            </ul>
        </div>
    )

}
