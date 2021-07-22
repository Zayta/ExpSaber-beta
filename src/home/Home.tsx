import React, { useState} from 'react'
import './home.scss'
import Main from './main/Main'
import { PlayerContext, PlayerContextData} from './data/context/PlayerContext'
import usePlayerContextValue from './data/api/Api';
import Search from './search/Search';

//uses context data, makes sure values are not undefined or null
const Home = ()=> {
  const [searched,setSearched] = useState(true)
  const [ssid, setSsid] = useState('76561198810679866');
  
  const search = function(ss_id:string){
    setSsid(ss_id);
    setSearched(true);
  }
    let playerContextValue = usePlayerContextValue(ssid);
    return  <div>
      <Search setScoreSaberID={search}/>
      {
        searched?
        <PlayerContext.Provider value={playerContextValue} >
          <Main />
        </PlayerContext.Provider>:<div></div>
      }
    </div>
}

export default Home;
