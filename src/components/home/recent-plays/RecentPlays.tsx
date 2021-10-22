import { useState } from "react";
import styled from "styled-components";
import { numInitialLoadedMapData } from "../../../config";
import { useSettings } from "../../../context/SettingsContext";
import  Score  from "../../../data/models/ScoreData";
import PlaysLi from "./PlaysLi";
import { sortBy, SortCriteria } from "./filter-and-sort/ScoreSortFunctions";
import FilterSortOptions from "./filter-and-sort/FilterSortOptions";

const RecentPlaysContainer = styled.div`
    display:flex;
    flex-direction:column;
    h3{
        padding:0;
        margin:0;
    }
`;
const RecentPlays = (props:RecentPlaysProps) =>{
    const {scoreSortOrder} = useSettings()!;
    //set filter to empty initially
    const [filter, setFilter] = useState('');

    const [sortCriteria,setSortCriteria] = useState<SortCriteria>(SortCriteria.TIME_SET);

    //condition for filter (by songName, song author etc. modify this to include dif criteria)
    function filterCondition(s:Score){
        const filterLC = filter.toLowerCase();
        return s.songName.toLowerCase().includes(filterLC)
        || s.songSubName.toLowerCase().includes(filterLC)
        || s.songAuthorName.toLowerCase().includes(filterLC)
        || s.levelAuthorName.toLowerCase().includes(filterLC)
        ||filter==='';
    }


    if(!props.scoresData||!props.scoresData.length){
        return <div>No recent plays</div>
    }
    return <RecentPlaysContainer>
        <div style = {{'display':'inline-flex', 'width':'100%', 'justifyContent':'space-between'}}>
        <h3>{scoreSortOrder} Plays</h3>
          <FilterSortOptions setSortCriteria = {setSortCriteria} setFilter={setFilter}/>
            </div>
        <ul>
        {
            props.scoresData.filter(filterCondition).sort(sortBy(sortCriteria)).map((score,index) =><PlaysLi key = {score.scoreId} score = {score} initShowDetails={index<numInitialLoadedMapData}/>)
        }
        </ul>
        </RecentPlaysContainer>
}
interface RecentPlaysProps{
    scoresData:Score[] | undefined;
}
  
export default RecentPlays;