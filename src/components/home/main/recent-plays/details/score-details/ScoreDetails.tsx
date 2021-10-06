import styled from "styled-components";
import { round } from "../../../../../../utils/Math";
import { ssLeaderboardURL } from "../../../../../../config/Constants";
import  Score  from "../../../../../../data/models/ScoreData";

const ScoreDetailsContainer = styled.div`
display:flex;
flex-direction:column;
align-items:flex-end;
text-size:0.7em;
a{
    width:fit-content;
}
`;
const LevelInfo = ({ score }:LevelInfoProps) =>{
    if(score){
        return <ScoreDetailsContainer>
            <div>
                Rank: <a target = "_blank" rel="noreferrer" href = {ssLeaderboardURL+score.leaderboardId}>#{score.rank}</a>
            </div>
            <div>
                    Acc: {round(score.score/score.maxScore*100)}%
                    </div>
        </ScoreDetailsContainer>
    }
    return <div/>

}
export default LevelInfo;
interface LevelInfoProps{
    score:Score|undefined;
}