import { useState} from 'react'
import { PlayerContext, PlayerContextData} from '../data/context/PlayerContext'
import usePlayerContextValue from '../data/api/Api';
import PlayerDetails from './player-details/PlayerDetails';

//uses context data, makes sure values are not undefined or null
const Main = (props:MainProps)=> {
  
    let playerContextValue = usePlayerContextValue();
    
  
    return  <div>
        <PlayerContext.Provider value={playerContextValue} >
          <PlayerDetails />
        </PlayerContext.Provider>
      
    </div>
}
interface MainProps{
  ssid:string
}
export default Main;
