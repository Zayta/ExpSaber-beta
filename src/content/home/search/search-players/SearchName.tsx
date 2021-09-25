import React,{Component, ReactHTMLElement} from 'react';
import '../search.scss';

import { Search } from 'react-feather';

import { Link } from 'react-router-dom';
import { PlayersByNameHook } from '../../data/api/ScoreSaberApi';
import LoadingIndicator from '../../../../common/Loading';

export default class SearchName extends Component{
    state:SearchNameState = {
        ss_name:"",
        searched:false
    }
    setSearched = () =>{
        this.setState({searched:false})
    }
    componentDidMount(){
        this.setState({searched:false})
    }
    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ ss_name: e.currentTarget.value,searched:false });
      };
    handleFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(e);
        this.setState({
            searched:true
        })
    }
    render(){
        return <div className = 'search-wrapper'>
            
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" name="scoreSaberID" placeholder='search username'value={this.state.ss_name} onChange={this.onChange} />
                <button type = 'submit' className = 'search-ico'><Search/></button>
            </form>
            <LoadingIndicator/>
            {
                this.state.searched?<div><MatchingNamesList setSearched = {this.setSearched} name = {this.state.ss_name}/></div>:<div></div>
            }
 
        </div>
      
    }
}
interface SearchNameState{
    ss_name:string,
    searched:boolean
    // search_results:PlayerInfo[]
}

const MatchingNamesList = (inpt:MatchingNamesListProp):JSX.Element =>{
    const namesListStyle = 
    {
        display:'flex', 
        flexFlow:'column wrap',
        overflow: 'auto',
        alignItems:'center'
    }
  let playersResponse = PlayersByNameHook(inpt.name);
    console.log(playersResponse)
    if(!playersResponse.playersList.players.length){
        return <div></div>
        // return <div>No results for {inpt.name}</div>
    }

    const handleClick = () =>{
        inpt.setSearched(false)
    }
    return <div style = {namesListStyle}>
        {
            playersResponse.playersList.players.map(p=>{
                return(<Link key = {p.playerId} onClick={handleClick} className = 'search-ico' to={"/ExpSaber/ssid/"+p.playerId}>#{p.rank} - {p.playerName}</Link>)
            })
        }
    </div>
}
interface MatchingNamesListProp {
    name:string,
    setSearched:(searched:boolean) =>void
}