import { useState } from "react";
import SelectPages from "./options/SelectPages";
import {Settings} from "react-feather"
const AppSettings=()=>{
    const [toggled,setToggled] = useState<boolean>(false);
    function toggle(){
        setToggled(!toggled);
    }
    return <div style = {{'display':'flex','width':'fit-content'}} onClick={toggle}>
        <Settings/>
        {
        toggled?<SelectPages/>:<div/>
    }</div>
}
export default AppSettings;