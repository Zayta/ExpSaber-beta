import { useState } from "react";
import styled from "styled-components";
import { numInitialLoadedMapData } from "../../../config";
import { useSettings } from "../../../context/SettingsContext";
import  SSScore  from "../../../data/models/ScoreData";
import PlaysLi from "./PlaysLi";
import { sortBy, SortCriteria, SortOrder } from "./filter-and-sort/ScoreSortFunctions";
import FilterSortOptions from "./filter-and-sort/FilterSortOptions";

const RecentPlaysStyle = styled.div`
    display:flex;
    flex-direction:column;
    h3{
        padding:0;
        margin:0;
    }
    overflow:auto;
`;
const RecentPlays = (props:RecentPlaysProps) =>{
    const {scoreSortOrder} = useSettings()!;
    //set filter to empty initially
    const [filter, setFilter] = useState('');

    const [sortCriteria,setSortCriteria] = useState<SortCriteria>(SortCriteria.TIME_SET);
    const [sortOrder,setSortOrder] = useState<SortOrder>(SortOrder.DESC);


    //condition for filter (by songName, song author etc. modify this to include dif criteria)
    function filterCondition(s:SSScore){
        const filterLC = filter.toLowerCase();
        return s.leaderboard.songName.toLowerCase().includes(filterLC)
        || s.leaderboard.songSubName.toLowerCase().includes(filterLC)
        || s.leaderboard.songAuthorName.toLowerCase().includes(filterLC)
        || s.leaderboard.levelAuthorName.toLowerCase().includes(filterLC)
        ||filter==='';
    }
    

    if(!props.scoresData||!props.scoresData.length){
        return <div>No recent plays</div>
    }
    return <RecentPlaysStyle>
        <div style = {{'display':'inline-flex', 'width':'100%', 'justifyContent':'space-between'}}>
        <h3>{scoreSortOrder} Plays</h3>
          <FilterSortOptions setSortCriteria = {setSortCriteria} setFilter={setFilter} sortOrder = {sortOrder} setSortOrder={setSortOrder}/>
            </div>
        <ul>
        {
            props.scoresData.filter(filterCondition).sort(sortBy(sortCriteria,sortOrder)).map((score,index) =><PlaysLi key = {score.score.id} score = {score} initShowDetails={index<numInitialLoadedMapData}/>)
        }
        </ul>
        </RecentPlaysStyle>
}
interface RecentPlaysProps{
    scoresData:SSScore[] | undefined;
}
  
export default RecentPlays;