import { RouteComponentProps, useParams, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Tab from '../../common/tabs/Tab';
import Tabs from '../../common/tabs/Tabs';
import { useScoresData, useSSPlayerData } from './data/api/hooks/ScoreSaberApi';
import ScoreSortOrder from './data/models/ScoreSortOrder';
import Search from './search/Search';
import PlayerDetails from './player-details/PlayerDetails';
import RecentPlays from './main/recent-plays/RecentPlays';
import ScoreSaberOverview from './main/ss-overview/SSProfile';
import { PlayerData } from './data/models/PlayerData';
import { QueryClientProvider } from 'react-query';

import queryClient from './data/api/ClientProvider';
import  Score  from './data/models/ScoreData';

const HomeContainer = styled.div`
  margin:5px;
  box-sizing: border-box;
  display:flex;
  justify-content: flex-start;
  flex-flow: row wrap;
  overflow-wrap:anywhere;
  margin:1vw;
  @media only screen and (max-width: 800px){
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
@media only screen and (max-width: 800px){
  flex-flow:column nowrap;
  width:90vw;
}
`;

const Home = () =>{
  return <QueryClientProvider client={queryClient}>
    <HomeContent/>
    
    </QueryClientProvider>
}


const HomeContent =  () => {
  const params = useParams<HomeParams>();//grab params from url
  let sortOrder = params.sortOrder?params.sortOrder:ScoreSortOrder.RECENT;
  //arbitrary restraint to prevent 429. TODO in future remove criteria params from url and embed in form data
  let pages = params.pages &&parseInt(params.pages)<10?parseInt(params.pages,10):3;
  let ssPlayerData:PlayerData|undefined = useSSPlayerData(params.ssid);
  let ssScoresData:Score[]|undefined = useScoresData(params.ssid,sortOrder,pages);
  return (
      <div>
        <Search/>
        <HomeContainer>
        {
          ssPlayerData?
            <PlayerDetails playerInfo={ssPlayerData.playerInfo}/>:
          <div>
          </div>
        }
        {
          ssPlayerData &&ssScoresData?
          renderTabs(ssScoresData,ssPlayerData):<div></div>
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
  sortOrder?:ScoreSortOrder;
  pages?:string;
};



export default withRouter(Home);
