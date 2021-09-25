import ScoresData from "../../data/models/ScoreData";
import PlaysLi from "./PlaysLi";

const RecentPlays = (props:RecentPlaysProps) =>{
    if(!props.scoresData){
        return <div>No recent plays</div>
    }

    return <div>
        <ul>
        {
            props.scoresData.scores.map(score =><PlaysLi key = {score.scoreId} score = {score}/>)
        }
        </ul>
        </div>
}
interface RecentPlaysProps{
    scoresData:ScoresData | undefined;
}
  
export default RecentPlays;