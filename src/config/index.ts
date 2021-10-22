import ScoreSortOrder from "../data/models/ScoreSortOrder";

//this file contains constants to be used in the rest of the application

export const tabletBreakpoint = '800px';
export const mobileBreakpoint = '500px';


export const maxPages = 30;
export const defaultPages = 15;
export const numInitialLoadedMapData=8;

export const defaultSortBy = ScoreSortOrder.RECENT;

//query
export const queryCacheStaleTime = 5*60*1000;
