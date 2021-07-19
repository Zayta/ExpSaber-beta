import React,{Component} from 'react';
import '../search.scss';

import {SearchProps} from '../Search'
export default class SearchID extends Component <SearchProps>{

    constructor(props:SearchProps) {
        super(props);
        
    }
    handlePlayerFormSubmit = async(event:any) =>{
        event.preventDefault();
        
        this.props.retrievePlayerData(this.props.scoreSaberID,event.target.sortOrder.value)
    }

    render(){
        return <div>
        <div className = 'search-wrapper'>
            
            <form onSubmit={this.handlePlayerFormSubmit}>
                <label>ScoreSaber ID:</label> 
                <input type="text" name="scoreSaberID" placeholder='e.g. 76561198810679866' value = {this.props.scoreSaberID}onChange={this.props.handleInputChange}/>
                <button type="submit">Submit</button>
            </form>
 
        </div>
      
        </div>
    }
}

