//data that is returned from https://new.scoresaber.com/api/player/<scoresaber_id>/scores/recent/<page>
export default interface ScoresData{
    scores:Score[]
}
export interface Score{
    difficulty: number,
    difficultyRaw: string,
    leaderboardId: number,
    levelAuthorName: string,
    maxScore: number,
    mods: string,
    pp: number,
    rank: number,
    score: number,
    scoreId: number,
    songAuthorName: string,
    songHash: string,
    songName: string,
    songSubName: string,
    timeSet: string,
    unmodififiedScore: number,
    weight: number
}
