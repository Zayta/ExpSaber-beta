import React,{Component, ReactHTMLElement} from 'react';
import '../search.scss';

import { Search } from 'react-feather';

import { Link } from 'react-router-dom';
import { usePlayerNameSearch } from '../../data/api/hooks/ScoreSaberApi';
import LoadingIndicator from '../../../../common/Loading';
import ScoreSortOrder from '../../data/models/ScoreSortOrder';

export default class SearchName extends Component{
    state:SearchNameState = {
        ss_name:"",
        searched:false,
        sortOrder:ScoreSortOrder.RECENT,
        pages:1
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
                this.state.searched?
                    <MatchingNamesList setSearched = {this.setSearched} 
                    name = {this.state.ss_name}
                    pages = {this.state.pages}
                    sortOrder={this.state.sortOrder}/>:<div/>
            }
 
        </div>
      
    }
}
interface SearchNameState{
    ss_name:string,
    searched:boolean,
    
    sortOrder:ScoreSortOrder,
    pages:number,
    // search_results:PlayerInfo[]
}

const MatchingNamesList:React.FC<MatchingNamesListProp> = ({name,setSearched,sortOrder,pages}):JSX.Element =>{
    const namesListStyle = 
    {
        display:'flex', 
        flexFlow:'column wrap',
        overflow: 'auto',
        alignItems:'center'
    }
  let playersResponse = usePlayerNameSearch(name);
    console.log(playersResponse)
    if(!playersResponse.playersList.players.length){
        return <div></div>
        // return <div>No results for {name}</div>
    }

    const handleClick = () =>{
        setSearched(false)
    }
    const criteria = sortOrder+"/"+pages;
    return <div style = {namesListStyle}>
        {
            playersResponse.playersList.players.map(p=>{
                return(<Link key = {p.playerId} onClick={handleClick} className = 'search-ico' to={"/ExpSaber/ssid/"+p.playerId+"/"+criteria}>#{p.rank} - {p.playerName}</Link>)
            })
        }
    </div>
}
interface MatchingNamesListProp {
    name:string,
    setSearched:(searched:boolean) =>void,
    
    sortOrder:ScoreSortOrder,
    pages:number,
}