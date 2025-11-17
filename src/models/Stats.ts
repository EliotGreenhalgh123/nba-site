export interface PlayerGameStat {
    id: number;
    pts: number;
    reb: number;
    ast: number;
    stl: number;
    blk: number;
    turnover: number;
    game: {
        id: number;
        date: string;
        home_team_id: number;
        away_team_id: number;
    };

}