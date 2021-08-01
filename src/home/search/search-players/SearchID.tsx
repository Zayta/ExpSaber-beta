import React,{Component} from 'react';
import '../search.scss';

import {SearchProps} from '../Search'
import { Link } from 'react-router-dom';

export default class SearchID extends Component <SearchProps,SearchIDState>{
    constructor(props:SearchProps){
        super(props)
        this.state = {
            ss_id: "",
        };
    }
    handlePlayerFormSubmit = async(event:any) =>{
        event.preventDefault();
        this.props.setScoreSaberID(this.state.ss_id);
    }
    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ ss_id: e.currentTarget.value });
      };
    render(){
        return <div>
        <div className = 'search-wrapper'>
            
            <form onSubmit={this.handlePlayerFormSubmit}>
                <label>ScoreSaber ID:</label> 
                <input type="text" name="scoreSaberID" placeholder='e.g. 76561198810679866'value={this.state.ss_id} onChange={this.onChange} />
                <Link to={"ExpSaber/"+this.state.ss_id}>Submit</Link>
            </form>
 
        </div>
      
        </div>
    }
}
interface SearchIDState{
    ss_id:string
}
