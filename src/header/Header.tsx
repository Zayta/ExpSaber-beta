
import React, {Component} from 'react';
import SearchID from '../home/search/search-players/SearchID';
import { routes } from '../routing/Routes';
import './header.scss';
import Navbar from '../routing/navbar/Navbar';
import SearchName from '../home/search/search-players/SearchName';
export default class Header extends Component {
    
    showSearch= true;
    render() {

        return(
            <div className = 'header-container'>
                <div className = {this.showSearch?'title-and-search':'hidden'}>
                <div className = 'header-wrapper'>
                <h1>
                    ExpSaber
                </h1>
                
                </div>
                <div className = {'header-search'}>
                <SearchName/>
                </div>
                </div>
                
                <div style = {{'display':'flex', 'alignItems':'center', 'flexFlow':'row wrap','justifyContent':'flex-end'}}>
                <Navbar links = {routes}/>
                
                </div>
                
            </div>
        )
        
    }
}