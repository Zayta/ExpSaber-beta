import React, { useContext} from 'react'
import { PlayerContext } from '../data/context/PlayerContext'
import './main.scss'
const Main = () => {
    const player = useContext(PlayerContext);
    return (
      <div>
          HOME
        {
            player?.playerData.playerInfo.playerName
        }
      </div>
    )
  }
  
export default Main