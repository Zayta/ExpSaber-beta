import { useState } from "react";
import { Filter } from "react-feather";
import styled from "styled-components";
import { SortCriteria, SortOrder } from "./ScoreSortFunctions";
import { SortOrderUI } from "./SortOrderUI";
//display component for filter and sorting
const FilterStyle = styled.div`
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
const SortOptionsStyle = styled.span`
    display:flex;
    flex-flow:column wrap;
    align-items:flex-start;
    justify-content:center;

`;
const SortOptions = ({setSortCriteria,setFilter,sortOrder,setSortOrder}:SortOptionsProps) =>{
    const [toggled,setToggled] = useState<boolean>(false);
    function toggle(){
        setToggled(!toggled)
    }
    let opts = [];
    for (let sc in SortCriteria) {
        if(!isNaN(Number(sc)))
            opts.push(<option key = {sc} value = {sc}>{SortCriteria[sc].toLowerCase().replace('_',' ')}</option>)
    }
    return <SortOptionsStyle>
        <div style = {{'display':'flex'}}>
            <FilterStyle>
         <input id="filter"
            name="filter"
            type="text"
            placeholder="filter"            
            defaultValue={''}
            onChange={event => setFilter(event.target.value)}
            />
            </FilterStyle>
        <span className = 'toggler' onClick = {toggle}>
        <Filter/>
        </span>
        </div>
        {toggled&&<span style={{'display':'flex'}}>sort by: <select onChange = {(e)=>{setSortCriteria(parseInt(e.currentTarget.value))}}>
            {opts}
    </select>  <SortOrderUI sortOrder={sortOrder} setSortOrder={setSortOrder}/></span>}</SortOptionsStyle>
}
interface SortOptionsProps{
    setSortCriteria:(sortCriteria:SortCriteria)=>void;
    setFilter:(filter:string)=>void;
    
    setSortOrder:(sortOrder:SortOrder)=>void;
    sortOrder:SortOrder
}

export default SortOptions;