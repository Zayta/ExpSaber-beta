import { memo, useState } from "react";
import styled from "styled-components";
import { timeSince } from "../../../../utils/Time";
import { mapCoverURL } from "../../data/constants/Constants";
import Difficulty from "../../data/models/Difficulty";
import  Score  from "../../data/models/ScoreData";
import {Plus,Minus} from "react-feather"
import MapDetails from "./map-details/MapDetails";
import ScoreDetails from "./score-details/ScoreDetails";
import SongData, { LevelMapData } from "../../data/models/SongData";
import MapActions from "./map-actions/MapActions";
const LiIndicator = styled.div`
    *{width:20px; margin-right:10px;};
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
    
    
    return <PlaysLiContainer>
        
        <FullPlayInfoContainer>
            
            <GeneralPlayInfoContainer>
            
                <TitleImageContainer>
                <div style = {{'display':'flex','height':'fit-content','alignItems':'center'}}>
                {/* <Toggler  onClick={toggleDetails}>
                    <LiIndicator>
                    {
                        showDetails?<Minus/>:
                        <Plus/>
                    }
                    </LiIndicator>
                </Toggler> */}
                <img id = 'cover' alt = "" src = {mapCoverURL+props.score.songHash.toLowerCase()+'.jpg'}/>  
                </div>      
                    <div style = {{'display':'flex','flexDirection':'column'}}>
                        
                            <div>{props.score.songName} {props.score.songSubName} - {props.score.songAuthorName}</div>
                            
                            <div className='dif'>{props.playedDiff} - {props.score.levelAuthorName}</div>
                            <MapActions songData = {props.songData}/>
                    </div>
                </TitleImageContainer>
                
                <div className = 'score-set-time'>{timeSince(props.score.timeSet)} ago</div>         
                        
            </GeneralPlayInfoContainer>
           
    
            {
                showDetails?
                <>
                <MapDetails songData={props.songData} lvlMapData={props.lvlMapData}/>
                
                <ScoreDetails score = {props.score}/>
                </>
                :<div/>
            }
    </FullPlayInfoContainer>
       
    
    </PlaysLiContainer>
}


interface PlaysLiProps{
    score:Score,
    songData: SongData | undefined,
    playedDiff:Difficulty,
    lvlMapData:LevelMapData | undefined
}




export default memo(PlaysLi);