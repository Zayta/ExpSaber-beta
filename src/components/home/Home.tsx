import { useParams, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Tab from '../common/tabs/Tab';
import Tabs from '../common/tabs/Tabs';
import {useSSPlayerInfo } from '../../data/api/hooks/ScoreSaberApi';
import ScoreSortOrder from '../../data/models/ScoreSortOrder';
import Search from './search/Search';
import PlayerDetails from './player-info/PlayerInfo';
import RecentPlays from './recent-plays/RecentPlays';
import Overview from './overview/Overview';
import { PlayerInfo } from '../../data/models/PlayerData';
import { QueryClientProvider } from 'react-query';

import queryClient from '../../data/api/ClientProvider';
import  SSScore  from '../../data/models/ScoreData';

import { SettingsProvider, useSettings } from '../../context/SettingsContext';

import { numScoresPerPage, tabletBreakpoint } from '../../config';
import { useScoresData } from '../../data/ScoresDataHook';

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
const BottomLeft = styled.div`
position:fixed;
bottom:10px;
left:10px;
@media only screen and (max-width: ${tabletBreakpoint}){
  display:none;
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

  let ssPlayerInfo:PlayerInfo|undefined = useSSPlayerInfo(id);


  let scoresData:SSScore[]|undefined = useScoresData(id,scoreSortOrder,pages*numScoresPerPage);
  
  console.log('ss scores data is ',scoresData)
  return (
      <div>
        <HomeStyle>
        {
          ssPlayerInfo?
            <PlayerDetails playerInfo={ssPlayerInfo}/>:
          <div>
          </div>
        }
        {
          ssPlayerInfo &&scoresData &&
          renderTabs(scoresData,ssPlayerInfo)
        }
        </HomeStyle>
      </div>
  )
}

const renderTabs = (ssScoresData:SSScore[], ssPlayerInfo:PlayerInfo) =>{
  return <Content>
          <Tabs>
          <Tab title="Overview">
              <Overview playerData = {ssPlayerInfo} scoresData={ssScoresData}/>
              </Tab>
            <Tab title="Scores"><RecentPlays scoresData = {ssScoresData}/></Tab>
            
          </Tabs>
        </Content>
}

type HomeParams = {
  id: string; //scoresaber id
};



export default withRouter(Home);
