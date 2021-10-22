import { useState } from "react";
import { Filter } from "react-feather";
import styled from "styled-components";

const SortOptionsContainer = styled.span`
    display:flex;
    flex-flow:column-wrap;
    align-items:center;
    justify-content:center;
`;
const SortOptions = () =>{
    const [toggled,setToggled] = useState<boolean>(false)
    function toggle(){
        setToggled(!toggled)
    }
    return <SortOptionsContainer>
        <span onClick = {toggle}>
        <Filter/>
        </span>
        {toggled?<select>

    </select>:<div/>}</SortOptionsContainer>
}

export default SortOptions;