import React, { memo, useState } from "react";
import styled from "styled-components";
import { timeSince } from "../../../../utils/Time";
import { mapCoverURL } from "../../data/constants/Constants";
import Difficulty from "../../data/models/Difficulty";
import  Score  from "../../data/models/ScoreData";
import Details from "./pli-components/Details";
import {Plus,Minus} from "react-feather"
const LiIndicator = styled.div`
    *{width:40px; margin-right:10px;};
`;
const PlaysLiContainer = styled.li`
    list-style-type:none;
    display:flex;
    flex-direction:row;
    align-items:center;
    margin:5px 0 5px 0;
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
  *{
      margin-left:5px;
  }
`;
const FullPlayInfoContainer = styled.div`
  display: flex;
  flex-direction:column;
  
width: 100%;
`
const GeneralPlayInfoContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
.score-set-time{
    font-size: 0.7em;
    color:var(--txt-color5);
    margin-left: 10px;
}
.dif{
    
    font-size: 0.7em;
    text-transform: capitalize;
    margin-left:10px;
}
`;
const Toggler = styled.div`
display:flex;
align-items:center;
cursor: pointer;
:hover{
    color: var(--txt-color4);
}
`;

const PlaysLi = (props:PlaysLiProps) =>{
    const [showDetails,setShowDetails] = useState<boolean>();

    const toggleDetails = ()=>{
        setShowDetails(!showDetails)
            
    }
    const mapLvl = getDifficulty(props.score.difficultyRaw);
    
    
    return <PlaysLiContainer>
        <Toggler  onClick={toggleDetails}>
                    <LiIndicator>
                    {
                        showDetails?<Minus/>:
                        <Plus/>
                    }
                    </LiIndicator>
                </Toggler>
        <FullPlayInfoContainer>
            <GeneralPlayInfoContainer>
            
                <TitleImageContainer>
                    
                <img id = 'cover' src = {mapCoverURL+props.score.songHash.toLowerCase()+'.jpg'}/>        
                    <div style = {{'display':'flex','flexDirection':'column'}}>
                        
                            <div>{props.score.songName} {props.score.songSubName} - {props.score.songAuthorName}</div>
                            
                            <div className='dif'>{mapLvl} - {props.score.levelAuthorName}</div>
                    
                    </div>
                </TitleImageContainer>
                <div className = 'score-set-time'>{timeSince(props.score.timeSet)} ago</div>         
                        
            </GeneralPlayInfoContainer>
    
            {
                showDetails?
                <Details score = {props.score} mapLvl = {mapLvl}/>
                :<div/>
            }
    </FullPlayInfoContainer>
       
    
    </PlaysLiContainer>
}


interface PlaysLiProps{
    score:Score
}

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



export default memo(PlaysLi);