import React from "react";
import styled from "styled-components";
import  Score  from "../../../../data/models/ScoreData";

const ScoreDetailsContainer = styled.div``;
const LevelInfo: React.FC<LevelInfoProps> = ({ score }) =>{
    if(score){
        return <ScoreDetailsContainer>
                
        </ScoreDetailsContainer>
    }
    return <div/>

}
export default LevelInfo;
interface LevelInfoProps{
    score:Score|undefined;
}