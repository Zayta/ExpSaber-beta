import React,{Component} from 'react';
import '../search.scss';

import {SearchProps} from '../Search'
export default class SearchID extends Component <SearchProps>{

    constructor(props:SearchProps) {
        super(props);
        
    }
    handlePlayerFormSubmit = async(event:any) =>{
        event.preventDefault();
        console.log(event.target.value);
        this.props.setScoreSaberID('76561198381299346');
    }

    render(){
        return <div>
        <div className = 'search-wrapper'>
            
            <form onSubmit={this.handlePlayerFormSubmit}>
                <label>ScoreSaber ID:</label> 
                <input type="text" name="scoreSaberID" placeholder='e.g. 76561198810679866' />
                <button type="submit">Submit</button>
            </form>
 
        </div>
      
        </div>
    }
}

