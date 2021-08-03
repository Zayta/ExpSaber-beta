import { useContext, useEffect} from 'react'
import { PlayerData, PlayerInfo } from '../../data/models/PlayerData'
import './player-details.scss'


const PlayerDetails = (props:PlayerDetailProps) => {
  return <div className='player-details-container'>
      {props.playerInfo.playerName}
      {props.playerInfo.country}
      <img src = {props.playerInfo.avatar} alt = '[Avatar image]'/>
  </div>
}
interface PlayerDetailProps{
    playerInfo:PlayerInfo
}
  
export default PlayerDetails