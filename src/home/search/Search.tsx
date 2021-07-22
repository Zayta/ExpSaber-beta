import React,{ChangeEventHandler, Component, FormEventHandler} from 'react';
import './search.scss';

import SearchID from './search-players/SearchID';
import SearchName from './search-players/SearchName';
export default class Search extends Component <SearchProps,SearchState>{

    constructor(props:SearchProps) {
        super(props);
        this.state={
            searchBy:SearchBy.NAME
        }
    }
    
    updateSearchCriteria=(event:any)=> {
        
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log('target value is '+target.value)
        this.setState({
          searchBy:value
        });
    }
    


    render(){
        return <div className = 'search-container'>
            <div className = 'search-criteria'>
            <label>Search By </label>
            <select id="searchBy" name="searchBy" defaultValue = {this.state.searchBy} onChange = {this.updateSearchCriteria}>
                <option value={SearchBy.ID}>ID</option>
                <option value={SearchBy.NAME}>Name</option>
            </select>
            </div>
        {
            this.renderSearch()
        }
      
        </div>
    }
    renderSearch(){
        switch(+this.state.searchBy){
            case SearchBy.ID:
                return <SearchID setScoreSaberID={this.props.setScoreSaberID} />
            break;
            case SearchBy.NAME:
                // return <SearchName retrievePlayerData = {this.props.retrievePlayerData} handleInputChange = {this.props.handleInputChange} scoreSaberID = {this.props.scoreSaberID}
                // handleError={this.props.handleError} />
                break;
            default:
                console.log(this.state.searchBy)
                console.log(SearchBy.ID)
                console.log(SearchBy.NAME)
            return <div>
                No Criteria Selected.
            </div>

        }
    }
}

export interface SearchProps{
    setScoreSaberID:(ssid:string)=>void
}
export interface SearchState{
    searchBy:SearchBy
}
export enum SearchBy{
    NAME=0,
    ID=1
}
