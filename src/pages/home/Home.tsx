import { QueryClientProvider } from 'react-query';
import { useParams, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Tab from '../../components/common/tabs/Tab';
import Tabs from '../../components/common/tabs/Tabs';
import Overview from '../../components/home/overview/Overview';
import PlayerDetails from '../../components/home/player-info/PlayerInfo';
import RecentPlays from '../../components/home/recent-plays/RecentPlays';
import Search from '../../components/home/search/Search';
import { useSSPlayerInfo } from '../../data/api/hooks/ScoreSaberApi';
import { PlayerInfo } from '../../data/models/PlayerData';

import queryClient from '../../data/api/ClientProvider';
import SSScore from '../../data/models/ScoreData';

import { SettingsProvider, useSettings } from '../../context/SettingsContext';

import BLFollowersInfo from '../../components/home/bl-followers/BLFollowers';
import { numScoresPerPage, tabletBreakpoint } from '../../config';
import { useScoresData } from '../../data/ScoresDataHook';
import { useBLFollowersInfo, useBLFollowersListInfo } from '../../data/api/hooks/BeatLeaderApi';
import FollowersInfo, { BLPlayerFollower, FollowDirection } from '../../data/models/FollowersInfo';

const HomeStyle = styled.div`
  margin:5px;
  box-sizing: border-box;
  display:flex;
  justify-content: flex-start;
  flex-flow: row wrap;
  overflow-wrap:anywhere;
  margin:1vw;
  @media only screen and (max-width: ${tabletBreakpoint}){
    flex-flow:column nowrap;
  }
`;
const Content = styled.div`
height:fit-content;
min-height: 60vh;
background-color: var(--content-color);
border-radius: 10px;
margin: 5px;
box-sizing: border-box;
align-self:center;

width: 50vw;
@media only screen and (max-width: ${tabletBreakpoint}){
  flex-flow:column nowrap;
  width:90vw;
}
`;


const Home = () =>{
  
  const params = useParams<HomeParams>();//grab params from url

  return <QueryClientProvider client={queryClient}>
    <SettingsProvider>
      <Search/>
            {
              params.id?
              <HomeContent id = {params.id}/>:
              <div style={{'minHeight':'80vh'}}/>
            }
            
    </SettingsProvider>
    </QueryClientProvider>
}


const HomeContent:React.FC<{id:string}> =  ({id}) => {
  const {pages,scoreSortOrder} = useSettings()!;

  //scoresaber scores
  let ssPlayerInfo:PlayerInfo|undefined = useSSPlayerInfo(id);
  let ssScoresData:SSScore[]|undefined = useScoresData(id,scoreSortOrder,pages*numScoresPerPage);


  //beat leader followers
  let blFollowersInfo:FollowersInfo|undefined = useBLFollowersInfo(id);
  let blFollowers:BLPlayerFollower[]|undefined = useBLFollowersListInfo(id,200,FollowDirection.FOLLOWERS);
  
  let blFollowing:BLPlayerFollower[]|undefined = useBLFollowersListInfo(id,200,FollowDirection.FOLLOWING);
  
  return (
      <div>
        <HomeStyle>
        {
          ssPlayerInfo?
            <PlayerDetails playerInfo={ssPlayerInfo}/>:
          <div>
          </div>
        }
        <Content>
          <Tabs>
          <Tab title="Overview">
              <Overview playerData = {ssPlayerInfo} scoresData={ssScoresData}/>
              </Tab>
            <Tab title="Scores"><RecentPlays scoresData = {ssScoresData}/></Tab>
            
            <Tab title="Followers"><BLFollowersInfo followersInfo={blFollowersInfo} blPlayerFollowers={blFollowers} blPlayerFollowing={blFollowing}/></Tab>
            
          </Tabs>
        </Content>
        </HomeStyle>
      </div>
  )
}


type HomeParams = {
  id: string; //scoresaber id
};



export default withRouter(Home);
