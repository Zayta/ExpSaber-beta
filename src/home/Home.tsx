import React, { useState,useEffect} from 'react'
import './home.scss'
import Main from './main/Main'
import { PlayerContext, PlayerContextData} from './data/context/PlayerContext'
import usePlayerContextValue from './data/api/Api';
import Search from './search/Search';



const Home = ()=> {
  const [searched,setSearched] = useState<boolean>(false);
  const {ssid, setSsid} = usePlayerContextValue();

  const search = function(ss_id:string){
    setSsid(ss_id);
    setSearched(true);
  }
    
    return  <div>
      <Search setScoreSaberID={search}/>
      {
        searched?
          <Main ssid={ssid?ssid:''}/>:<div></div>
      }
    </div>
}

export default Home;
