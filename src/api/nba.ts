import type { Team } from '../models/Team.ts'
import type { Player } from '../models/Player.ts'
import type {PlayerGameStat} from "../models/Stats.ts";

const BASE = "https://www.balldontlie.io/api/v1"

export async function fetchTeams(): Promise<Team[]> {
    const response = await fetch(`${BASE}/teams`);
    const data = await response.json();
    return data.data;
}

export async function fetchPlayers(): Promise<Player[]> {
    const response = await fetch(`${BASE}/players`);
    const data = await response.json();
    return data.data;
}

export async function fetchPlayerStats(playerID: number): Promise<PlayerGameStat[]> {
    const response = await fetch(`${BASE}/stats?player_ids[]=${playerID}`);
    const data = await response.json();
    return data.data;
}
