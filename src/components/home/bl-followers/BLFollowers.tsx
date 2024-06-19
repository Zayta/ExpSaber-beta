import styled from "styled-components";
import FollowersInfo, { BLPlayerFollower } from "../../../data/models/FollowersInfo";
import BlFollowerLi from "./blFollowerLi/BlFollowerLi";

const BlFollowersInfoStyle = styled.div`
    display:flex;
    flex-direction:column;
    h3 {
        padding:0;
        margin:0;
    }
    overflow:auto;
   
`;
const BLFollowersInfo = ({followersInfo,blPlayerFollowers}:BLFollowersInfoProps) =>{
   if(!followersInfo)return<div/>;
   if(!blPlayerFollowers) return<div/>;

    return <BlFollowersInfoStyle>
    <div style = {{'display':'inline-flex', 'width':'100%', 'justifyContent':'space-between'}}>
    <h3>Followers Info</h3>
    <div>Followed by {followersInfo.followersCount} players</div>
    <ul>
    {followersInfo.followers.map((blp)=><BlFollowerLi key={blp.id}  follower={blp}/>)}
    </ul>
    <div>Following {followersInfo.followingCount} players</div>
   <ul>
    {followersInfo.following.map((blp)=><BlFollowerLi key={blp.id}  follower={blp}/>)}
    </ul>
    

    <h3>All Followers:</h3>
    <ul>
    {blPlayerFollowers.map((blp)=><BlFollowerLi key={blp.id}  follower={blp}/>)
    }
    </ul>
    </div>
    </BlFollowersInfoStyle>
}

interface BLFollowersInfoProps{
    followersInfo?:FollowersInfo,
    blPlayerFollowers?:BLPlayerFollower[]
}
  
export default BLFollowersInfo;