import type {Team} from "./Team.ts";

export interface Player {
    id: number;
    first_name: string;
    last_name: string;
    position: string;
    team: Team;
}