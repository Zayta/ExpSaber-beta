import React, { useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import './home.scss'
import Main from './main/Main'
import Search from './search/Search';



const Home = ()=> {
  const [searched,setSearched] = useState<boolean>(false);
  const [ssid, setSsid] = useState<string>();
  
  const setSSID = function(ss_id:string){
    setSsid(ss_id);
    setSearched(true);
    
  }
    
    return  <div>
      <Search setScoreSaberID={setSSID}/>
      {/* {
        searched?
          <Main ssid={ssid?ssid:''}/>:<div></div>
      } */}
    </div>
}

export default Home;
