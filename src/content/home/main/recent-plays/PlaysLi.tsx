import { memo, useState } from "react";
import styled from "styled-components";
import { timeSince } from "../../../../utils/Time";
import { mapCoverURL } from "../../data/constants/Constants";
import Difficulty from "../../data/models/Difficulty";
import  Score  from "../../data/models/ScoreData";
import Details from "./details/Details";
import { mobileBreakpoint } from "../../../../config";
import { ChevronRight, Minus, Plus } from "react-feather";
const LiIndicator = styled.div`
@media only screen and (max-width: ${mobileBreakpoint}) {
    * {
        display:none;
        width:0;
    }
  }
    *{width:12px;};
`;
const PlaysLiContainer = styled.li`
    list-style-type:none;
    display:grid;
    grid-template-columns:max-content 11fr;
    grid-gap:10px;

    width: 100%;
img#cover{
    max-width: 100%;
    max-height: 100%;
    min-height:3em;
    min-width:3em;
    width: 5vw;
    height: 5vw
  }
`;
const TitleImageContainer = styled.div`
  display:flex;
  flex-flow:row nowrap;
  #cover+div{
      margin-left:15px;
  }
`;
const GeneralPlayInfoContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
.score-set-time{
    font-size: 0.7em;
    color:var(--txt-color5);
    
}
.dif{
    
    font-size: 0.7em;
    text-transform: capitalize;
    margin-left:5px;
}
`;

const Toggler = styled.div`
display:flex;
    align-items:center;
cursor: pointer;
:hover{
    color: var(--txt-color3);
}
`;

const PlaysLi = (props:PlaysLiProps) =>{
    const initShowDetails = props.initShowDetails?props.initShowDetails:false;
    const [showDetails,setShowDetails] = useState<boolean>(initShowDetails);

    const toggleDetails = ()=>{
        setShowDetails(!showDetails)
            
    }
    const playedDiff = getDifficulty(props.score.difficultyRaw);
  
    
    return <PlaysLiContainer>
        <Toggler  onClick={toggleDetails}>
            <LiIndicator >
            {
                showDetails?<Minus/>:<Plus/>
            }
            </LiIndicator>
        </Toggler>
        
            <GeneralPlayInfoContainer>
            
            <Toggler onClick={toggleDetails}>
                <TitleImageContainer>
                
                <img id = 'cover' alt = "" src = {mapCoverURL+props.score.songHash.toLowerCase()+'.jpg'}/>  
                    
                    <div style = {{'display':'flex','flexDirection':'column'}}>
                        
                            <div>{props.score.songName} {props.score.songSubName} - {props.score.songAuthorName}</div>
                            
                            <div className='dif'>{playedDiff} - {props.score.levelAuthorName}</div>
                            
                    </div>
                </TitleImageContainer>
            </Toggler>
                
                <div className = 'score-set-time'>{timeSince(props.score.timeSet)} ago</div>         
                        
            </GeneralPlayInfoContainer>
           <div/>
    
            {
                showDetails?
                <Details score = {props.score} playedDiff = {playedDiff}/>
                
                :<div/>
            }
     
    </PlaysLiContainer>
}


//parses the difficulty level from data string
function getDifficulty(difficulty_str:string):Difficulty{
    difficulty_str = difficulty_str.toLowerCase().replace(' ','_').replace('-','_'); 
    if(difficulty_str.includes('plus'))
        return Difficulty.EXPERT_PLUS;
    if(difficulty_str.includes('expert'))
        return Difficulty.EXPERT;
    if(difficulty_str.includes('hard'))
        return Difficulty.HARD;
    if(difficulty_str.includes('normal'))
        return Difficulty.NORMAL;
    if(difficulty_str.includes('easy'))
        return Difficulty.EASY;


    return Difficulty.UNKNOWN;
}

interface PlaysLiProps{
    score:Score
    initShowDetails?:boolean;
}




export default memo(PlaysLi);