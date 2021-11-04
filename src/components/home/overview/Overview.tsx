import { useState } from "react";
import styled from "styled-components";
import { numInitialLoadedMapData } from "../../../config";
import { useSettings } from "../../../context/SettingsContext";
import  Score  from "../../../data/models/ScoreData";

const OverviewStyle = styled.div`
    display:flex;
    flex-direction:column;
    h3{
        padding:0;
        margin:0;
    }
`;
const Overview = (props:OverviewProps) =>{
    if(!props.scoresData||!props.scoresData.length){
        return <div>No recent plays</div>
    }

    return <OverviewStyle>
        </OverviewStyle>
}
interface OverviewProps{
    scoresData:Score[] | undefined;
}
  
export default Overview;