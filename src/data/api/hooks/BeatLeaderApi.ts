import axios from "axios";
import { useEffect, useState } from "react";
import { trackPromise } from "react-promise-tracker";
import FollowersInfo, { BLPlayerFollower, FollowDirection } from "../../models/FollowersInfo";

const beatLeaderApi='https://api.beatleader.xyz'

export function useBLFollowersInfo(beatleader_id:string):FollowersInfo|undefined{
    const [blFollowersInfo,setBLFollowersInfo] = useState<FollowersInfo>();
    
    useEffect(() => {
      const fetchFollowersInfo = async () => {
        try {
          const userResponse = await trackPromise(axios.get(beatLeaderApi+'/player/'+beatleader_id+'/followersInfo'));
          console.log('blfollowers info is ',userResponse)
          setBLFollowersInfo(userResponse.data);
          
        }catch (err) {
          console.log('Error:', err);
        }
       };
       fetchFollowersInfo();
    }, [beatleader_id]);
    console.log('returned followers info: ',blFollowersInfo)
    return blFollowersInfo

}

export function useBLFollowersListInfo(beatleader_id:string,count=200,followDirection=FollowDirection.FOLLOWERS):BLPlayerFollower[]|undefined{
    const [blFollowers,setBLFollowers] = useState<BLPlayerFollower[]>();
    
    useEffect(() => {
      const fetchFollowersInfo = async () => {
        try {
          const userResponse = await trackPromise(axios.get(beatLeaderApi+'/player/'+beatleader_id+'/followers?count='+count+'&type='+followDirection));
          console.log('blfollowers list is ',userResponse)
          setBLFollowers(userResponse.data);
          
        }catch (err) {
          console.log('Error:', err);
        }
       };
       fetchFollowersInfo();
    }, [beatleader_id]);
    console.log('returned followers: ',blFollowers)
    return blFollowers

}
