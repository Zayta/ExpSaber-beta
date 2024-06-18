//data you get when calling https://scoresaber.com/api/player/<insert_scoresaberID_here>/full API

export interface PlayerInfo{
    id: string,
    name: string,
    profilePicture: string,
    bio:string,
    rank: number,
    countryRank: number,
    pp: number,
    country: string,
    inactive:boolean,
    firstSeen:string,
    banned: boolean,
    histories: string,
    scoreStats:ScoreStats
}

export interface ScoreStats{
    totalScore: number,
    totalRankedScore: number,
    averageRankedAccuracy: number,
    totalPlayCount: number,
    rankedPlayCount: number,
    replaysWatched: number
}