import React, { useState} from 'react'
import './home.scss'
import Main from './main/Main'
import { PlayerContext, PlayerContextData} from './data/context/PlayerContext'
import usePlayerContextValue from './data/api/Api';


const Home = ()=> {
  const [ssid, setSsid] = useState('76561198381299346');
  
    const playerContextValue = usePlayerContextValue(ssid);
    return  <PlayerContext.Provider value={playerContextValue} >
    <Main />
  </PlayerContext.Provider>
}

export default Home;
