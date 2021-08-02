import React,{Component} from 'react';
import '../search.scss';

import { Link } from 'react-router-dom';

export default class SearchID extends Component{
    state:SearchIDState = {
        ss_id:""
    }
    
    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ ss_id: e.currentTarget.value });
      };
    render(){
        return <div className = 'search-wrapper'>
            
            <form >
                <label>ScoreSaber ID:</label> 
                <input type="text" name="scoreSaberID" placeholder='e.g. 76561198810679866'value={this.state.ss_id} onChange={this.onChange} />
                <Link className = 'button' to={"/ExpSaber/ssid/"+this.state.ss_id}>Submit</Link>
            </form>
 
        </div>
      
    }
}
interface SearchIDState{
    ss_id:string
}
