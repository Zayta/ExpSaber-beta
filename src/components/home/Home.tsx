import { useParams, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Tab from '../common/tabs/Tab';
import Tabs from '../common/tabs/Tabs';
import {useSSPlayerData } from '../../data/api/hooks/ScoreSaberApi';
import ScoreSortOrder from '../../data/models/ScoreSortOrder';
import Search from './search/Search';
import PlayerDetails from './player-info/PlayerInfo';
import RecentPlays from './recent-plays/RecentPlays';
import ScoreSaberOverview from './ss-overview/SSProfile';
import { PlayerData } from '../../data/models/PlayerData';
import { QueryClientProvider, QueryErrorResetBoundary } from 'react-query';

import queryClient from '../../data/api/ClientProvider';
import  Score  from '../../data/models/ScoreData';

import { SettingsProvider, useSettings } from '../../context/SettingsContext';

import AppSettings from './settings/Settings';
import { tabletBreakpoint } from '../../config';
import { useScoresData } from '../../data/ScoresDataHook';

const HomeContainer = styled.div`
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
              params.ssid?
              <HomeContent ssid = {params.ssid}/>:
              <div/>
            }
             <AppSettings/>
    </SettingsProvider>
    </QueryClientProvider>
}


const HomeContent:React.FC<{ssid:string}> =  ({ssid}) => {
  const {pages} = useSettings()!;

  let ssPlayerData:PlayerData|undefined = useSSPlayerData(ssid);
  
  let scoresData:Score[]|undefined = useScoresData(ssid,ScoreSortOrder.RECENT,pages);
  
  
  return (
      <div>
        <HomeContainer>
        {
          ssPlayerData?
            <PlayerDetails playerInfo={ssPlayerData.playerInfo}/>:
          <div>
          </div>
        }
        {
          ssPlayerData &&scoresData?
          renderTabs(scoresData,ssPlayerData):<div></div>
        }
        </HomeContainer>
      </div>
  )
}

const renderTabs = (ssScoresData:Score[], ssPlayerData:PlayerData) =>{
  return <Content>
          <Tabs>
          <Tab title="ScoreSaber">
              <ScoreSaberOverview playerData = {ssPlayerData}/>
              </Tab>
            <Tab title="Recent"><RecentPlays scoresData = {ssScoresData}/></Tab>
            
          </Tabs>
        </Content>
}

type HomeParams = {
  ssid: string; //scoresaber id
};



export default withRouter(Home);
