import React,{Component} from 'react';
import '../search.scss';

import { Search } from 'react-feather';

import { Link } from 'react-router-dom';
import ScoreSortOrder from '../../data/models/ScoreSortOrder';

export default class SearchID extends Component{
    state:SearchIDState = {
        ss_id:"",
        sortOrder:ScoreSortOrder.RECENT,
        pages:0
    }
    
    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ ss_id: e.currentTarget.value });
      };
    handleFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(e);
        window.location.href="/ExpSaber/ssid/"+this.state.ss_id
      }
    render(){
        return <div className = 'search-wrapper'>
            
            <form onSubmit={this.handleFormSubmit}>
                <label>ScoreSaber ID:</label> 
                <input type="text" name="scoreSaberID" placeholder='e.g. 76561198810679866'value={this.state.ss_id} onChange={this.onChange} />
                <Link className = 'search-ico' to={"/ExpSaber/ssid/"+this.state.ss_id}><Search/></Link>
            </form>
 
        </div>
      
    }
}
interface SearchIDState{
    ss_id:string,
    sortOrder:ScoreSortOrder,
    pages:number,
}
