import { useState } from "react";
import styled from "styled-components";
import { timeSince } from "../../../../utils/Time";
import { Score } from "../../data/models/ScoreData";
const PlaysLiContainer = styled.li`
    
.general-play-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.toggler{
    cursor: pointer;
}
.toggler:hover{
    color: var(--txt-color4);
}
.toggled:hover,.untoggled:hover{
    opacity: 0.9;
    color:var(--txt-color4);

}
.toggled{
    list-style-type: disc;
    color:var(--txt-color4)
}
.untoggled{
    list-style-type: circle;
    color:var(--txt-color2)

}
.toggled,.untoggled{
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    align-items: center;
}
.score-set-time{
    font-size: 0.7em;
    color:var(--txt-color5);
    margin-left: 10px;
}
.lvlAuthor{
    color:var(--txt-color2)
}
.dif{
    
    font-size: 0.7em;
    text-transform: capitalize;
}
*+.dif{
    margin-left:10px;
}
`;
const PlaysLi = (props:PlaysLiProps) =>{
    const [showDetails,setShowDetails] = useState<boolean>();
    const toggleDetails = ()=>{
        setShowDetails(!showDetails)
            
    }
    return <PlaysLiContainer style = {showDetails?{'listStyleType':'disc'}:{'listStyleType':'circle'}}><div className = 'general-play-info'>
                
    <div className = 'song-title toggler' onClick={toggleDetails}>
        <div className = {showDetails?'toggled':'untoggled'}>
            <div>{props.score.songName} {props.score.songSubName} - {props.score.songAuthorName}</div>
            <div className = 'dif'>{formatDifficulty(props.score.difficultyRaw)}</div>
            
           
        </div>
       
    </div>
    
    <div className = 'gen-score-info'>
    <div className = 'score-set-time'>{timeSince(props.score.timeSet)} ago</div>
    
                    
                    
        </div>          
    </div>
    
    </PlaysLiContainer>
}
export default PlaysLi;
interface PlaysLiProps{
    score:Score
}



function formatDifficulty(difficulty_str:string){
    difficulty_str = difficulty_str.toLowerCase().replace(' ','_').replace('-','_'); 
    if(difficulty_str.includes('plus'))
        return 'expertPlus';
    if(difficulty_str.includes('expert'))
        return 'expert';
    if(difficulty_str.includes('hard'))
        return 'hard';
    if(difficulty_str.includes('normal'))
        return 'normal';
    if(difficulty_str.includes('easy'))
        return 'easy';


    return '';
}