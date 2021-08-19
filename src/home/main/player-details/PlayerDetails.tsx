import { useContext, useEffect} from 'react'
import { PlayerData, PlayerInfo } from '../../data/models/PlayerData'
import styled from "styled-components";
import { avatarPrefix, ssWebProfilePrefix } from '../../data/api/ScoreSaberApi';
import Bloq from '../../../icons/bloq';

const PlayerDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: top;
  justify-content: flex-start;
  margin:10px;
  box-sizing: border-box;
  overflow-wrap:anywhere;
    h1{
      margin-top:0;
    }
    h1,h2,h3,h4,h5,h6 {
      color:var(--txt-color3)
    } 
    a{
      color:var(--txt-color4);
    }
    img{
      width: 185px;
    }
    *{
      align-self:center;
    }
    .gen-item{
      margin-top:10px;
      width: 100%;
      display: flex;
      justify-content: center;
    }
`;
const PlayerDetails = (props:PlayerDetailProps) => {
  return <PlayerDetailsContainer>
      <h1>{props.playerInfo.playerName}</h1>
            <img src = {avatarPrefix+props.playerInfo.avatar} alt = 'Avatar'/>
      <div className = 'gen-item'>
        {props.playerInfo.country}
      </div>
      <div className = 'gen-item'>
        <a target = "_blank" href = {ssWebProfilePrefix+props.playerInfo.playerId}><Bloq color = '#FFDE1A'/></a>
      </div>
      
            
  </PlayerDetailsContainer>
}
interface PlayerDetailProps{
    playerInfo:PlayerInfo
}
  
export default PlayerDetails