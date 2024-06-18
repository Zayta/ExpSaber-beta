import { PlayerInfo } from '../../../data/models/PlayerData'
import styled from "styled-components";

const PlayerDetailsStyle = styled.div`
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
    .restrain-text-length{
      width:30vw;
      text-align:center;
    }
`;
const PlayerDetails = ({playerInfo}:PlayerDetailplayerInfo) => {
  return <PlayerDetailsStyle>
      <div className = 'restrain-text-length'>
      <h1>{playerInfo.name}</h1>
      </div>
            <img src = {playerInfo.profilePicture} alt = 'Avatar'/>
      <div className = 'gen-item'>
        {playerInfo.country}
      </div>
      
            
  </PlayerDetailsStyle>
}
interface PlayerDetailplayerInfo{
    playerInfo:PlayerInfo
}
  
export default PlayerDetails