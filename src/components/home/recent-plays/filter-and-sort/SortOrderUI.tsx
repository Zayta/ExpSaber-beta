import { ChevronDown, ChevronUp } from "react-feather";
import { SortOrder } from "./ScoreSortFunctions";

export const SortOrderUI = ({sortOrder,setSortOrder}:SortOrderUIProps) =>{
    function toggleSortOrder(){
        if(sortOrder===SortOrder.DESC){
            setSortOrder(SortOrder.ASC);
        }
        else{
            setSortOrder(SortOrder.DESC);
        }
    }

    return <div onClick={toggleSortOrder}>
        {
            sortOrder===SortOrder.DESC?<ChevronDown/>:<ChevronUp/>
        }
    </div>
    
}

interface SortOrderUIProps{
    setSortOrder:(sortOrder:SortOrder)=>void;
    sortOrder:SortOrder
}