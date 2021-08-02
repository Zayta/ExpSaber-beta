import React,{Component} from 'react';
import '../search.scss';

import { Search } from 'react-feather';

import { Link } from 'react-router-dom';

export default class SearchName extends Component{
    state:SearchNameState = {
        ss_name:""
    }
    
    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ ss_name: e.currentTarget.value });
      };
    handleFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(e);
      }
    render(){
        return <div className = 'search-wrapper'>
            
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" name="scoreSaberID" placeholder='search username'value={this.state.ss_name} onChange={this.onChange} />
                <button type = 'submit' className = 'search-ico'><Search/></button>
            </form>
 
        </div>
      
    }
}
interface SearchNameState{
    ss_name:string
}
