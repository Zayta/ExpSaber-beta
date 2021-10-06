import { useState } from "react";
import styled from "styled-components";
import { numInitialLoadedMapData } from "../../../../config";
import  Score  from "../../../../data/models/ScoreData";
import PlaysLi from "./PlaysLi";
const FilterContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    position:sticky;
    top:0;
`;

const RecentPlays = (props:RecentPlaysProps) =>{
    //set filter to empty initially
    const [filter, setFilter] = useState('');
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
    return <div>
          <FilterContainer>
            <input id="filter"
            name="filter"
            type="text"
            placeholder="filter"            
            value={filter}
            onChange={event => setFilter(event.target.value)}
            />
            </FilterContainer>
        <ul>
        {
            props.scoresData.filter(filterCondition).map((score,index) =><PlaysLi key = {score.scoreId} score = {score} initShowDetails={index<numInitialLoadedMapData}/>)
        }
        </ul>
        </div>
}
interface RecentPlaysProps{
    scoresData:Score[] | undefined;
}
  
export default RecentPlays;