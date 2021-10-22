import ScoreSortOrder from "../models/ScoreSortOrder"

export function mapToScoreSortOrder(sortOrder:string):ScoreSortOrder{
    if(sortOrder.toLowerCase()===ScoreSortOrder.TOP){
        return ScoreSortOrder.TOP
    }
    return ScoreSortOrder.RECENT
  }