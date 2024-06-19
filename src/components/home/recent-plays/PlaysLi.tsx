import { useState } from "react";
import { Minus, Plus } from "react-feather";
import styled from "styled-components";
import { tabletBreakpoint } from "../../../config";
import { mapCoverURL } from "../../../config/static";
import SSScore from "../../../data/models/ScoreData";
import getMapDifficulty from "../../../data/parsers/DifficultyParser";
import { timeSince } from "../../../utils/Time";
const LiIndicator = styled.div`
@media only screen and (max-width: ${tabletBreakpoint}) {
    * {
        display:none;
        width:0;
    }
  }
  
  display:flex;
  align-items:center;
  height:100%;
    *{width:12px;};
`;
const PlaysLiStyle = styled.li`
@media only screen and (max-width: ${tabletBreakpoint}) {
        display:flex;
        flex-flow:row wrap;
        width:100%;
  }
    list-style-type:none;
    display:grid;
    grid-gap:10px;
    margin-top:10px;
    padding:5px;
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
const TitleImageStyle = styled.div`
  display:flex;
  flex-flow:row nowrap;
  
@media only screen and (max-width: ${tabletBreakpoint}) {
    flex-flow: row wrap;
}
  #cover+div{
      margin-left:15px;
  }
`;
const GeneralPlayInfoStyle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width:100%;
padding:5px;
.score-set-time{
    font-size: 0.7em;
    opacity:0.75;
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
    width:100%;
    height:100%;
cursor: pointer;
border-radius:5px 5px 2px 2px;
:hover *{
    background-color:var(--bckgrnd-lite);
}
`;

const PlaysLi = (props:PlaysLiProps) =>{
    const initShowDetails = props.initShowDetails?props.initShowDetails:false;
    const [showDetails,setShowDetails] = useState<boolean>(initShowDetails);

    const toggleDetails = ()=>{
        setShowDetails(!showDetails)
            
    }
    const playedDiff = getMapDifficulty(props.score.leaderboard.difficulty.difficultyRaw);
  
    
    return <PlaysLiStyle style={showDetails?{'backgroundColor':'var(--bckgrnd-lite)'}:{}}>
        
        <Toggler onClick={toggleDetails}>
        <LiIndicator >
            {
                showDetails?<Minus/>:<Plus/>
            }
            </LiIndicator>
            
            <GeneralPlayInfoStyle>
            
                <TitleImageStyle>
                
                <img id = 'cover' alt = "" src = {mapCoverURL+props.score.leaderboard.songHash.toLowerCase()+'.jpg'}/>  
                    
                    <div style = {{'display':'flex','flexDirection':'column'}}>
                        
                            <div>{props.score.leaderboard.songName} {props.score.leaderboard.songSubName} - {props.score.leaderboard.songAuthorName}</div>
                            
                            <div className='dif'>{playedDiff} - {props.score.leaderboard.levelAuthorName}</div>
                            
                    </div>
                </TitleImageStyle>
            
                <div className = 'score-set-time'>{timeSince(props.score.score.timeSet)} ago</div>         
                        
            </GeneralPlayInfoStyle>
            </Toggler>
                
           <div/>
    
            {
                showDetails?
                <div>TODO details</div>
                
                :<div/>
            }
     
    </PlaysLiStyle>
}




interface PlaysLiProps{
    score:SSScore
    initShowDetails?:boolean;
}




export default (PlaysLi);