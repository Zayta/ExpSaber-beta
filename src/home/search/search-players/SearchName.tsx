import React,{Component} from 'react';
import '../search.scss';

import {SearchProps} from '../Search';
import {corsJSON} from '../../../utils/fetchOpts'
export default class SearchName extends Component <SearchProps, SearchNameState>{

    constructor(props:SearchProps) {
        super(props);
        this.state = {
            isMounted:false,
            searchName:'',
            isSubmitted:false,
            isLoading:false,
            error:null,
            searchResults:[]
        }
    }
    componentDidMount(){
        this.setState({
            isMounted:true
        })
    }
    searchName= async(event: { preventDefault: () => void; })=>{
        event.preventDefault();
        if(this.state.searchName.length <= 3){
            alert('Please enter more than 3 characters')
            return;
        }
        
        this.setState({
            isSubmitted:false
        });
        try{
            await this.setState({isLoading:true,error:null})
            let playersResponse = await fetch("https://new.scoresaber.com/api/players/by-name/"+this.state.searchName,corsJSON);
            let data = await playersResponse.json();
            if(playersResponse.ok){
                console.log(data);
                if(this.state.isMounted){
                    this.setState({searchResults:data.players})
                    console.log('Search results are ');
                    console.log(this.state.searchResults)
                }
            if(this.state.isMounted)
                this.setState({isLoading:false})
            }
            else{
                throw new Error(data.error.message)
            }
            
        }
        catch (err){

            if(this.state.isMounted){
                // this.props.handleError(err);
                this.setState({error:err});   
            await this.setState({isLoading:false})
            }
            console.log("ERROR IN SEARCH NAME: "+err.message)
        }
        
    }
    handleNameInput=(event: { target: any; })=>{
        
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        this.setState({
            searchName:value+''
        });
        
    }
    
    render(){
        return <div>
        <div className = 'search-container'>
        <div className = 'search-wrapper'>
            
            <form onSubmit={this.searchName}>
                <label>Username:</label> 
                <input type="text" name="searchName" placeholder='username' value = {this.state.searchName}onChange={this.handleNameInput}/>
                <button type="submit">Submit</button>
            </form>
 
        </div>
        </div>
        {
            this.state.isSubmitted?<div></div>:
            <div className = 'name-results'>
                {this.renderSearchResults()}
            </div>
        }
        </div>
    }
    componentWillUnmount(){
        this.setState({
            isMounted:false
        })
    }
    handleNameClick = (event: any) =>{
        console.log('event target was:')
        console.log(event.target.id)
        this.setState({
            isSubmitted:true
        })
        // this.props.retrievePlayerData(event.target.id);
    }
    
    renderSearchResults = () =>{
        if(this.state.isLoading){
            return <div>Loading...</div>
        }
        else if (this.state.error){
            return <div></div>
        }

        let players: JSX.Element[]=[];
        // console.log('rendering results of ')
        console.log(this.state.searchResults)
        if(this.state.searchResults){
            this.state.searchResults.forEach(player=>{
                if(player){
                    console.log('pushing player');
                    console.log(player)
                    players.push(
                    <li className='name-result' onClick={this.handleNameClick} id = {player.playerId} key ={player.playerId} value = {player.playerId}>{player.playerName}</li>
                    )
                }
            })
        }
        return <ul>{players}</ul>
    }
}
interface SearchNameState{
    isMounted:boolean,
    searchName:string,
    isSubmitted:boolean,
    searchResults:any[],
    error:Error|null,
    isLoading:boolean
}

