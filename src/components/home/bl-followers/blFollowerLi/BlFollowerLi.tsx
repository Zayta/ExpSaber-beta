import { useState } from "react";
import styled from "styled-components";
import { tabletBreakpoint } from "../../../../config";
import { BLPlayerFollower } from "../../../../data/models/FollowersInfo";


const BlFollowerLiStyle = styled.li`
@media only screen and (max-width: ${tabletBreakpoint}) {
        display:flex;
        flex-flow:row wrap;
        width:100%;
  }
    list-style-type:none;
    display:grid;
    grid-gap:10px;
    margin-top:10px;
    padding:5px;
    wiAvatarImageStyledth: 100%;
img#cover{
    max-width: 100%;
    max-height: 100%;
    min-height:3em;
    min-width:3em;
    width: 5vw;
    height: 5vw
  }
`;
const AvatarImageStyle = styled.div`
  display:flex;
  flex-flow:row nowrap;
  
@media only screen and (max-width: ${tabletBreakpoint}) {
    flex-flow: row wrap;
}
  #cover+div{
      margin-left:15px;
  }
`;
const GeneralPlayInfoStyle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width:100%;
padding:5px;
.follower-set-time{
    font-size: 0.7em;
    opacity:0.75;
}
.dif{
    
    font-size: 0.7em;
    text-transform: capitalize;
    margin-left:5px;
}
`;

const Toggler = styled.a`
color:var(--txt-color2);
display:flex;
    align-items:center;
    width:100%;
    height:100%;
cursor: pointer;
border-radius:5px 5px 2px 2px;
:hover *{
    background-color:var(--bckgrnd-lite);
}
`;

const BlFollowerLi = ({follower,initShowDetails=false}:BlFollowerLiProps) =>{
    const [showDetails,setShowDetails] = useState<boolean>(initShowDetails);

    const goToProfile = (followerId:string)=>{
        
        window.location.href="/ExpSaber/player/id/"+followerId
    }
 
    
    return <BlFollowerLiStyle style={showDetails?{'backgroundColor':'var(--bckgrnd-lite)'}:{}}>
        
        
  
            <GeneralPlayInfoStyle>
            
                <AvatarImageStyle>
                
                <img id = 'cover' alt = "" src = {follower.avatar}/>  
                    
                    <div style = {{'display':'flex','flexDirection':'column'}}>
                    <Toggler onClick={()=>goToProfile(follower.id)}>
                            {follower.name}  </Toggler>
                            
                            <div className='dif'>{follower.id}</div>
                            
                    </div>
                </AvatarImageStyle>
            
                <div className = 'follower-set-time'></div>         
                        
            </GeneralPlayInfoStyle>
          
                
           <div/>
    
            {
                showDetails?
                <div>TODO details</div>
                
                :<div/>
            }
     
    </BlFollowerLiStyle>
}




interface BlFollowerLiProps{
    follower:BLPlayerFollower
    initShowDetails?:boolean;
}




export default (BlFollowerLi);