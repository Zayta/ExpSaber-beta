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


const BLFollowersInfo = ({followersInfo,blPlayerFollowers,blPlayerFollowing}:BLFollowersInfoProps) =>{
   
   const [showFollowersDetails,setshowFollowersDetails] = useState<boolean>(false);
   
   const [showFollowingDetails,setshowFollowingDetails] = useState<boolean>(false);

   const toggleFollowerDetails = ()=>{
       setshowFollowersDetails(!showFollowersDetails)
   }
   const toggleFollowingDetails = ()=>{
    setshowFollowingDetails(!showFollowingDetails)
}
   if(!followersInfo)return<div/>;

    return <BlFollowersInfoStyle>
    <div>
    <h3>Followers Info</h3>
    <Toggler onClick={toggleFollowerDetails}>
        <span>
    
    Followed by {followersInfo.followersCount} players</span><LiIndicator >
            {
                showFollowersDetails?<Minus/>:<Plus/>
            }
            </LiIndicator>
    </Toggler>
    
    {showFollowersDetails? <ul>
    {blPlayerFollowers&&blPlayerFollowers.map((blp,i)=><BlFollowerLi key={i}  follower={blp}/>)
    }
    </ul>:
    <ul>
    {followersInfo.followers.map((blp,i)=><BlFollowerLi key={i}  follower={blp}/>)}
    </ul>
    }
      <Toggler onClick={toggleFollowingDetails}>
        <span>
    
        Following {followersInfo.followingCount} players</span><LiIndicator >
            {
                showFollowersDetails?<Minus/>:<Plus/>
            }
            </LiIndicator>
    </Toggler>
    {showFollowingDetails? <ul>
    {blPlayerFollowing&&blPlayerFollowing.map((blp,i)=><BlFollowerLi key={i}  follower={blp}/>)
    }
    </ul>:
   <ul>
    {followersInfo.following.map((blp,i)=><BlFollowerLi key={i} follower={blp}/>)}
    </ul>}
    
    </div>
    </BlFollowersInfoStyle>
}

interface BLFollowersInfoProps{
    followersInfo?:FollowersInfo,
    blPlayerFollowers?:BLPlayerFollower[],
    blPlayerFollowing?:BLPlayerFollower[]
}
  
export default BLFollowersInfo;