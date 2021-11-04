import { useState } from "react";
import SelectPages from "./options/SelectPages";
import {Settings} from "react-feather"
import styled from "styled-components";
import SelectScoreSortOrder from "./options/SelectScoreSort";
import { tabletBreakpoint } from "../../../config";
import { useSettings } from "../../../context/SettingsContext";
const AppSettingsStyle = styled.div`
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
    
`;
const AvailableSettingsStyle = styled.div`
display: flex;
    flex-flow: row wrap;
    justify-content:flex-end;
    @media only screen and (max-width:${tabletBreakpoint}){
        flex-direction:row;
        align-items:center;
        justify-content:flex-start;
    }
`;
const AppSettings=()=>{
    const {toggled,setToggled} = useSettings()!;
    function toggle(){
        setToggled(!toggled);
    }
    return <AppSettingsStyle>
        <div className = 'toggler'>
        <Settings  onClick={toggle}/>
        </div>
        {
        toggled&&<AvailableSettings/>
    }</AppSettingsStyle>
}
const AvailableSettings = () =>{
    return <AvailableSettingsStyle>
        <SelectScoreSortOrder/>
        <SelectPages/>
    </AvailableSettingsStyle>
}
export default AppSettings;