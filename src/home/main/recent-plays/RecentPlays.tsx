import ScoresData from "../../data/models/ScoreData";

const RecentPlays = (props:RecentPlaysProps) =>{
    return <div>Plays Overview{JSON.stringify(props.scoresData)}</div>
}
interface RecentPlaysProps{
    scoresData:ScoresData | undefined;
}
  
export default RecentPlays;