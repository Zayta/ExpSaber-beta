import { useState } from "react";
import SelectPages from "./options/SelectPages";
import {Settings} from "react-feather"
import styled from "styled-components";
import SelectScoreSortOrder from "./options/SelectScoreSort";
import { tabletBreakpoint } from "../../../config";
const AppSettingsContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    width:fit-content;
    height:fit-content;
    margin:0 5px;
    @media only screen and (max-width:${tabletBreakpoint}){
        flex-direction:row;
        align-items:center;
        justify-content:flex-start;
    }
    .toggler *{
        cursor:pointer;
        width:16px;
        height:16px;
    }
    .toggler :hover{
        color:var(--txt-color4);
    }
`;
const AvailableSettingsContainer = styled.div`
display: flex;
    flex-flow: row wrap;
    justify-content:flex-end;
    
`;
const AppSettings=()=>{
    const [toggled,setToggled] = useState<boolean>(false);
    function toggle(){
        setToggled(!toggled);
    }
    return <AppSettingsContainer>
        <div className = 'toggler'>
        <Settings  onClick={toggle}/>
        </div>
        {
        toggled?<AvailableSettings/>:<div/>
    }</AppSettingsContainer>
}
const AvailableSettings = () =>{
    return <AvailableSettingsContainer>
        <SelectScoreSortOrder/>
        <SelectPages/>
    </AvailableSettingsContainer>
}
export default AppSettings;