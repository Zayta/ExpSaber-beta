import {Component} from 'react';

import SearchID from './search-players/SearchID';
import SearchName from './search-players/SearchName';
import styled from 'styled-components';
import AppSettings from '../settings/Settings';
import { mobileBreakpoint, tabletBreakpoint } from '../../../config';
enum SearchBy{
    NAME=0,
    ID=1
}
const SearchStyle=styled.div`
width:100%;
display:flex;
align-items:flex-end;
justify-content:center;
flex-flow:row wrap;
@media only screen and (max-width: ${mobileBreakpoint}) {
 
      display:flex;
      flex-flow:column-reverse nowrap;
      align-items:center;
      justify-content:flex-start;
  }

`;
const SearchFormStyle = styled.div`

.search-container{
    display:flex;
    flex-direction: column;
    height:fit-content;
}
.search-criteria{
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom:5px;
    font-size: 0.5em;
}
.search-container label+select{
    margin-left: 5px;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    align-self: center;
}
#searchBy{
    margin:0;
    padding:0;
    border-radius: 5px;
    background-color: var(--content-color);
    color: inherit;
    font-size: inherit;
    font-family:inherit;
    outline: none;
    border: none;
}

.search-wrapper{
    align-items: center;
    display: flex;
    flex-flow: column;
}
.search-wrapper form{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    max-height: 100%;
}
.search-wrapper form label+input{
    margin-left: 5px;
}
.search-wrapper form input + button{
    margin-left: 2px;
}
.search-wrapper form button{
    margin:5px;
    text-align: center;
    display: flex;
    align-self: center;
}
select{
    border-radius: 5px;
}
.name-results{
    display: flex;
    flex-flow: row wrap;
    overflow-wrap: anywhere;
}
.name-result{
    cursor: pointer;
}
a.search-ico,button.search-ico{
    display: flex;
    align-items: center;
    padding:0;
    margin:0;
    background-color: transparent;
    color:var(--main-btn-color)
}
button.search-ico:hover{
    color:white;
}
`;
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
        return <SearchStyle>
            <AppSettings/>
        <SearchFormStyle>
            
            <div className = 'search-container'>
            
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
        </SearchFormStyle>
        
        </SearchStyle>
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

