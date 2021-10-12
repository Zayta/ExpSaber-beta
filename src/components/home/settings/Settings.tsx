import { useState } from "react";
import SelectPages from "./options/SelectPages";
import {Settings} from "react-feather"
import styled from "styled-components";
const AppSettingsContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    width:fit-content;
    height:fit-content;
    margin:0 5px;
    .toggler *{
        cursor:pointer;
        width:16px;
        height:16px;
    }
    .toggler :hover{
        color:var(--txt-color4);
    }
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
        toggled?<SelectPages/>:<div/>
    }</AppSettingsContainer>
}
export default AppSettings;