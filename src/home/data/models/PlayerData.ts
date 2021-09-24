//data you get when calling https://new.scoresaber.com/api/player/<insert_scoresaberID_here>/full API
export interface PlayerData{
    playerInfo:PlayerInfo
    scoreStats:ScoreStats
}
export interface PlayerInfo{
    playerId: string,
    playerName: string,
    avatar: string,
    rank: number,
    countryRank: number,
    pp: number,
    country: string
}
export interface ScoreStats{
    totalScore: number,
    totalRankedScore: number,
    averageRankedAccuracy: number,
    totalPlayCount: number,
    rankedPlayCount: number
}