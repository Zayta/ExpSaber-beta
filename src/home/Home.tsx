import React, { Component, useCallback, useState} from 'react'
import './home.scss'
import Main from './main/Main'
import { PlayerContext, PlayerContextData} from './data/context/PlayerContext'


export default class Home extends Component<HomeState> {
    

    render() {
        return  <PlayerContext.Provider value={playerContextDefaultValue} >
        <Main />
      </PlayerContext.Provider>
    }
}
interface HomeState{

}

