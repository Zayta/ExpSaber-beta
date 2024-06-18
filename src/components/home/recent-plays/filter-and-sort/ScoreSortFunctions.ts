import SSScore from "../../../../data/models/ScoreData";
export enum SortCriteria{
    TIME_SET,SONG_NAME,SONG_AUTHOR,RANK,DIFFICULTY,LEVEL_AUTHOR,SCORE,PP
}
export enum SortOrder{
    DESC=1,ASC=-1
}
export function sortBy(sortCriteria:SortCriteria,sortOrder=SortOrder.DESC){
    
    switch(sortCriteria){
        case SortCriteria.SONG_NAME:
            return sortBySongName(sortOrder);
        case SortCriteria.SONG_AUTHOR:
            return sortBySongAuthor(sortOrder);
        case SortCriteria.RANK:
            return sortByRank(sortOrder);
        case SortCriteria.DIFFICULTY:
            return sortByDifficulty(sortOrder);
        case SortCriteria.LEVEL_AUTHOR:
            return sortByLevelAuthor(sortOrder);
        case SortCriteria.SCORE:
            return sortByScore(sortOrder);
        case SortCriteria.TIME_SET:
            return sortByTime(sortOrder);
        case SortCriteria.PP:
            return sortByPP(sortOrder);

    }
}
const sortBySongName = (order:SortOrder) =>{return ((s1:SSScore, s2:SSScore) => ((s1.leaderboard.songName > s2.leaderboard.songName) ? 1 : -1)*order)};
const sortBySongAuthor = (order:SortOrder) =>{return ((s1:SSScore, s2:SSScore) => ((s1.leaderboard.songAuthorName > s2.leaderboard.songAuthorName) ? 1 : -1)*order)};
const sortByRank = (order:SortOrder) =>{return ((s1:SSScore, s2:SSScore) => ((s1.score.rank > s2.score.rank) ? 1 : -1)*order)};
const sortByDifficulty = (order:SortOrder) =>{return ((s1:SSScore, s2:SSScore) => ((s1.leaderboard.difficulty > s2.leaderboard.difficulty) ? 1 : -1)*order)};
const sortByLevelAuthor = (order:SortOrder) =>{return ((s1:SSScore, s2:SSScore) => ((s1.leaderboard.levelAuthorName > s2.leaderboard.levelAuthorName) ? 1 : -1)*order)};
const sortByScore = (order:SortOrder) =>{return ((s1:SSScore, s2:SSScore) => ((s1.score.baseScore > s2.score.baseScore) ? 1 : -1)*order)};
const sortByTime = (order:SortOrder) =>{return ((s1:SSScore, s2:SSScore) => ((s1.score.timeSet > s2.score.timeSet) ? -1 : 1)*order)};
const sortByPP = (order:SortOrder) =>{return ((s1:SSScore, s2:SSScore) => ((s1.score.pp > s2.score.pp) ? -1 : 1)*order)};

