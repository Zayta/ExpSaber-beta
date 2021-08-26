import { RouteComponentProps, useParams, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Tab from '../../common/tabs/Tab';
import Tabs from '../../common/tabs/Tabs';
import { ScoresDataHook, SSPlayerDataHook } from '../data/api/ScoreSaberApi';
import ScoreSortOrder from '../data/models/ScoreSortOrder';
import Search from '../search/Search';
import PlayerDetails from './player-details/PlayerDetails';
import RecentPlays from './recent-plays/RecentPlays';
import ScoreSaberOverview from './ss-overview/ScoreSaber';


const MainContainer = styled.div`
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
const Main =  () => {
  const params = useParams<MainParams>();
  
  let ssPlayerData = SSPlayerDataHook(params.ssid);
  let ssScoresData = ScoresDataHook(params.ssid,ScoreSortOrder.recent,3)
  return (
      <div>
        <Search/>
        <MainContainer>
        {
          ssPlayerData?
          <div>
            <PlayerDetails playerInfo={ssPlayerData.playerInfo}/>
          </div>:
          <div>
          </div>
        }
        <Content>
        <Tabs>
          <Tab title="Recent"><RecentPlays scoresData = {ssScoresData}/></Tab>
          <Tab title="ScoreSaber">
            <ScoreSaberOverview playerData = {ssPlayerData}/>
            </Tab>
        </Tabs>
        </Content>

        </MainContainer>
      </div>
  )
}

type MainParams = {
  ssid: string; //scoresaber id 
};


export default withRouter(Main);
