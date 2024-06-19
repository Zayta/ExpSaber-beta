import styled from "styled-components";
import FollowersInfo, { BLPlayerFollower } from "../../../data/models/FollowersInfo";
import BlFollowerLi from "./blFollowerLi/BlFollowerLi";
import { useState } from "react";
import { Minus, Plus } from "react-feather";
import { tabletBreakpoint } from "../../../config";

const BlFollowersInfoStyle = styled.div`
    display:flex;
    flex-direction:column;
    h3 {
        padding:0;
        margin:0;
    }
    overflow:auto;
   
`;
const Toggler = styled.div`
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

const LiIndicator = styled.div`
@media only screen and (max-width: ${tabletBreakpoint}) {
    * {
        display:none;
        width:0;
    }
  }
  
  display:flex;
  align-items:center;
  height:100%;
    *{width:12px;};
`;


const BLFollowersInfo = ({followersInfo,blPlayerFollowers}:BLFollowersInfoProps) =>{
   
   const [showDetails,setShowDetails] = useState<boolean>(false);

   const toggleDetails = ()=>{
       setShowDetails(!showDetails)
           
   }
   if(!followersInfo)return<div/>;
   if(!blPlayerFollowers) return<div/>;

    return <BlFollowersInfoStyle>
    <div>
    <h3>Followers Info</h3>
    <Toggler onClick={toggleDetails}>
        <span>
    
    Followed by {followersInfo.followersCount} players</span><LiIndicator >
            {
                showDetails?<Minus/>:<Plus/>
            }
            </LiIndicator>
    </Toggler>
    
    {showDetails? <ul>
    {blPlayerFollowers.map((blp)=><BlFollowerLi key={blp.id}  follower={blp}/>)
    }
    </ul>:
    <ul>
    {followersInfo.followers.map((blp)=><BlFollowerLi key={blp.id}  follower={blp}/>)}
    </ul>
    }
    <div>Following {followersInfo.followingCount} players</div>
   <ul>
    {followersInfo.following.map((blp)=><BlFollowerLi key={blp.id}  follower={blp}/>)}
    </ul>
    
    </div>
    </BlFollowersInfoStyle>
}

interface BLFollowersInfoProps{
    followersInfo?:FollowersInfo,
    blPlayerFollowers?:BLPlayerFollower[]
}
  
export default BLFollowersInfo;