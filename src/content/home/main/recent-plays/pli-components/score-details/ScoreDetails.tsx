import React from "react";
import styled from "styled-components";
import { ssLeaderboardURL } from "../../../../data/constants/Constants";
import  Score  from "../../../../data/models/ScoreData";

const ScoreDetailsContainer = styled.div`
display:flex;
flex-direction:column;
`;
const LevelInfo: React.FC<LevelInfoProps> = ({ score }) =>{
    if(score){
        return <ScoreDetailsContainer>
                <a target = "_blank" rel="noreferrer" href = {ssLeaderboardURL+score.leaderboardId}>#{score.rank}</a>
                {score.score}/{score.maxScore}
                
        </ScoreDetailsContainer>
    }
    return <div/>

}
export default LevelInfo;
interface LevelInfoProps{
    score:Score|undefined;
}