import styled from "styled-components";
import { round } from "../../../../../../utils/Math";
import { ssLeaderboardURL } from "../../../../data/constants/Constants";
import  Score  from "../../../../data/models/ScoreData";

const ScoreDetailsContainer = styled.div`
display:flex;
flex-direction:column;
text-size:0.7em;
`;
const LevelInfo = ({ score }:LevelInfoProps) =>{
    if(score){
        return <ScoreDetailsContainer>
                Rank: <a target = "_blank" rel="noreferrer" href = {ssLeaderboardURL+score.leaderboardId}>#{score.rank}</a>
                    Acc: {round(score.score/score.maxScore*100)}%
        </ScoreDetailsContainer>
    }
    return <div/>

}
export default LevelInfo;
interface LevelInfoProps{
    score:Score|undefined;
}