
import React, {Component} from 'react';
import SearchID from '../home/search/search-players/SearchID';
import { routes } from '../routing/Routes';
import './header.scss';
import Navbar from '../routing/navbar/Navbar';
export default class Header extends Component {
    
    showSearch= true;
    render() {

        return(
            <div className = 'header-container'>
                  <div className = 'header-wrapper'>
                <h1>
                    ExpSaber
                </h1>
                </div>
                <div className = {this.showSearch?'header-search':'hidden'}>
                <SearchID/>
                </div>
                <Navbar links = {routes}/>
                
            </div>
        )
        
    }
}