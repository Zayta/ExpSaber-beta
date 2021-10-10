//based on data from https://github.com/Mystogan98/BeatSaviorData
export interface TrackerStat{
    deepTrackers:any,
    playerID:string,
    songArtist:string,
    songDataType: number,
    songDifficulty:string,
    songDuration:number,
    songID:string,
    songMapper:string,
    songName:string,
    songSpeed:number,
    songStartTime:number,
    timeSet:Date,
    _id:string,
    trackers:{
        accuracyTracker:AccuracyTracker,
        distanceTracker: DistanceTracker
        hitTracker:HitTracker,
        scoreGraphTracker:ScoreGraphTracker,
        scoreTracker:ScoreTracker,
        winTracker:WinTracker
    }
}
export interface DistanceTracker{
    leftHand:number,
    leftSaber:number,
    rightHand:number,
    rightSaber:number
}
export interface HitTracker{
    badCuts:number,
    bombHit:number,
    leftBadCuts:number,
    leftMiss:number,
    leftNoteHit:number,
    maxCombo:number,
    miss:number,
    missedNotes:number,
    nbOfWallHit:number,
    rightBadCuts:number,
    rightMiss:number,
    rightNoteHit: number
}
export interface ScoreGraphTracker{
    graph:any
}
export interface ScoreTracker{
    modifiedRatio:number,
    modifiers:[],
    modifiersMultiplier:number,
    personalBest:number,
    personalBestModifiedRatio:number,
    personalBestRawRatio:number,
    rawRatio:number,
    rawScore:number,
    score:number
}
export interface WinTracker{
    endTime:number,
    nbOfPause:number,
    rank:string,
    won:boolean
}
export interface AccuracyTracker{
    accLeft:number,
    accRight:number,
    averageAcc:number,
    averageCut: Array<number>,
    averagePostswing: number,
    averagePreswing:number,
    averageSpeed:number,
    averageTimeDependence:number,
    gridAcc:Array<number>,
    gridCut:Array<number>,
    leftAverageCut:Array<number>,
    leftHighestSpeed:number,
    leftPreswing:number,leftPostswing:number,
    leftSpeed:number,
    leftTimeDependence:number,
    rightAverageCut:Array<number>,
    rightHighestSpeed:number,
    rightPreswing:number,rightPostswing:number,
    rightSpeed:number,
    rightTimeDependence:number,
    

}