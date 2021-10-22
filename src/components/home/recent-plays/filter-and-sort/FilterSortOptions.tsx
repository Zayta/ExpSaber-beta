import { useState } from "react";
import { Filter } from "react-feather";
import styled from "styled-components";
import Score from "../../../../data/models/ScoreData";
import { SortCriteria } from "./ScoreSortFunctions";
const FilterContainer = styled.div`
    display:flex;
    flex-direction:row;
    input{

        height:fit-content;
    }
    justify-content:flex-end;
    position:sticky;
    top:0;
    background:var(--bckgrnd);
`;
const SortOptionsContainer = styled.span`
    display:flex;
    flex-flow:column wrap;
    align-items:flex-start;
    justify-content:center;

`;
const SortOptions = ({setSortCriteria,setFilter}:SortOptionsProps) =>{
    const [toggled,setToggled] = useState<boolean>(false)
    function toggle(){
        setToggled(!toggled)
    }
    let opts = [];
    for (let sc in SortCriteria) {
        if(!isNaN(Number(sc)))
            opts.push(<option key = {sc} value = {sc}>{SortCriteria[sc].toLowerCase()}</option>)
    }
    return <SortOptionsContainer>
        <div style = {{'display':'flex'}}>
            <FilterContainer>
         <input id="filter"
            name="filter"
            type="text"
            placeholder="filter"            
            defaultValue={''}
            onChange={event => setFilter(event.target.value)}
            />
            </FilterContainer>
        <span className = 'toggler' onClick = {toggle}>
        <Filter/>
        </span>
        </div>
        {toggled&&<span>sort by: <select onChange = {(e)=>{setSortCriteria(parseInt(e.currentTarget.value))}}>
            {opts}
    </select></span>}</SortOptionsContainer>
}
interface SortOptionsProps{
    setSortCriteria:(sortCriteria:SortCriteria)=>void;
    setFilter:(filter:string)=>void;
}

export default SortOptions;