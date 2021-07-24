import React, { useState} from 'react'
import './home.scss'
import Main from './main/Main'
import { PlayerContext, PlayerContextData} from './data/context/PlayerContext'
import usePlayerContextValue from './data/api/Api';
import Search from './search/Search';



export default class Home extends React.Component{
  state: HomeState = {
    ssid: '',
    searched:false
  };


  search = (ss_id:string)=>{
    this.setState({
      ssid:ss_id,
      searched:true
    });
    console.log('set ssid to '+ss_id)
    console.log('set ssid to '+this.state.ssid)
  }
  
  render(){
    
    let playerContextValue = usePlayerContextValue(this.state.ssid);
    return  <div>
      <Search setScoreSaberID={this.search}/>
      {
        this.state.searched?
        <PlayerContext.Provider value={playerContextValue} >
          <Main ssid={this.state.ssid}/>
        </PlayerContext.Provider>:<div></div>
      }
    </div>
  }
}
interface HomeState{
  ssid:string,
  searched:boolean
}

