import { BalldontlieAPI } from "@balldontlie/sdk";

const api = new BalldontlieAPI({ apiKey: "2f4bb2ab-bf3e-4bbb-a7f7-4e84f7e18f85"});

export async function getTeams() {
    try {
        const response = await api.nba.getTeams();
        return response.data;
    }
    catch (error) {
        console.error("Error fetching teams: ", error);
        throw error;
    }
}

export async function getPlayers() {
    try {
        const response = await api.nba.getPlayers();
        return response.data;
    }
    catch (error) {
        console.error("Error fetching players: ", error);
        throw error;
    }
}

export async function getGames() {
    try {
        const response = await api.nba.getGames();
        return response.data;
    }
    catch (error) {
        console.error("Error fetching teams: ", error);
        throw error;
    }
}

