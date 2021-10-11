import styled from "styled-components";
import { round } from "../../../../../utils/Math";
import { ssLeaderboardURL } from "../../../../../config/static";
import  Score  from "../../../../../data/models/ScoreData";
import { mobileBreakpoint } from "../../../../../config";

const ScoreInfoContainer = styled.div`
display:flex;
flex-direction:column;
align-items:flex-end;
text-size:0.7em;
a{
    width:fit-content;
}
@media only screen and (max-width: ${mobileBreakpoint}){
flex-flow: row wrap;
justify-content:space-between;
width:100%;
    div {
        padding:5px;
    }
}
`;
const ScoreInfo = ({ score }:ScoreInfoProps) =>{
    if(score){
        return <ScoreInfoContainer>
            <div>
                Rank: <a target = "_blank" rel="noreferrer" href = {ssLeaderboardURL+score.leaderboardId}>#{score.rank}</a>
            </div>
            <div>
                    Acc: {round(score.score/score.maxScore*100)}%
            </div>
        </ScoreInfoContainer>
    }
    return <div/>

}
export default ScoreInfo;
interface ScoreInfoProps{
    score:Score|undefined;
}