import {Component} from 'react';
import './search.scss';

import SearchID from './search-players/SearchID';
import SearchName from './search-players/SearchName';
enum SearchBy{
    NAME=0,
    ID=1
}
export default class Search extends Component{

    
    state = {
        searchBy:SearchBy.NAME
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
            <select id="searchBy" name="searchBy" value = {this.state.searchBy} onChange = {this.updateSearchCriteria}>
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
                return <SearchID />
            
            case SearchBy.NAME:
                
                return <SearchName/>
                
            default:
                console.log(this.state.searchBy)
            return <div>
                No Criteria Selected.
            </div>

        }
    }
}

export interface SearchState{
    searchBy:SearchBy
}

