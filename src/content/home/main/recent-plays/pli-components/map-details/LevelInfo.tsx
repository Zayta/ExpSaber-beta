import React from "react";
import styled from "styled-components";
import { round } from "../../../../../../utils/Math";
import { LevelMapData } from "../../../../data/models/SongData";

const LevelInfoContainer = styled.div`
    display:flex;
    flex-flow: row wrap;
    width:50%;
`;
const InfoPt = styled.div`
display:flex;
flex-direction:row nowrap;
margin-left:5px;
`;
const LevelInfo: React.FC<LevelInfoProps> = ({ map_data }) =>{
    if(map_data){
        return <LevelInfoContainer>
            <InfoPt>nps: {round(map_data.nps)}</InfoPt>
            <InfoPt>njs: {round(map_data.njs)}</InfoPt>
            <InfoPt>length: {round(map_data.seconds)}</InfoPt>
            <InfoPt>notes: {map_data.notes}</InfoPt>
            <InfoPt>bombs: {map_data.bombs}</InfoPt>
            <InfoPt>obstacles: {map_data.obstacles}</InfoPt>
           
        </LevelInfoContainer>
    }
    return <div/>

}
export default LevelInfo;
interface LevelInfoProps{
    map_data:LevelMapData|undefined;
}