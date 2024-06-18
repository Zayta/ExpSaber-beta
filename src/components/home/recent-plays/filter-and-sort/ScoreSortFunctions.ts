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
const sortBySongName = (order:SortOrder) =>{return ((s1:SSScore, s2:SSScore) => ((s1.songName > s2.songName) ? 1 : -1)*order)};
const sortBySongAuthor = (order:SortOrder) =>{return ((s1:SSScore, s2:SSScore) => ((s1.songAuthorName > s2.songAuthorName) ? 1 : -1)*order)};
const sortByRank = (order:SortOrder) =>{return ((s1:SSScore, s2:SSScore) => ((s1.rank > s2.rank) ? 1 : -1)*order)};
const sortByDifficulty = (order:SortOrder) =>{return ((s1:SSScore, s2:SSScore) => ((s1.difficulty > s2.difficulty) ? 1 : -1)*order)};
const sortByLevelAuthor = (order:SortOrder) =>{return ((s1:SSScore, s2:SSScore) => ((s1.levelAuthorName > s2.levelAuthorName) ? 1 : -1)*order)};
const sortByScore = (order:SortOrder) =>{return ((s1:SSScore, s2:SSScore) => ((s1.score > s2.score) ? 1 : -1)*order)};
const sortByTime = (order:SortOrder) =>{return ((s1:SSScore, s2:SSScore) => ((s1.timeSet > s2.timeSet) ? -1 : 1)*order)};
const sortByPP = (order:SortOrder) =>{return ((s1:SSScore, s2:SSScore) => ((s1.pp > s2.pp) ? -1 : 1)*order)};

