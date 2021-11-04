import styled from "styled-components";
import { PlayerData } from "../../../../data/models/PlayerData";
import Score from "../../../../data/models/ScoreData";

const GeneralStyle = styled.div``;
const General = ({scoresData,playerData}:GeneralProps) =>{
    return <GeneralStyle>
        <div>
        Total Plays: {playerData?.scoreStats.totalPlayCount}
        </div>
        <div>
        Total Score: {playerData?.scoreStats.totalScore}
        </div>
        <div>
        {/* Average Recent Accuracy (of last {scoresData.length} maps played): {avgAcc}% */}
        </div>
    </GeneralStyle>
}
const avgAcc = (scores:Score[]) =>{
    let total = 0;
    scores.forEach(score=>{
        total+=(score.score/score.maxScore)
    })
    return total/scores.length;
}
interface GeneralProps{
    
    playerData:PlayerData | undefined;
    scoresData:Score[];
}


export default General;