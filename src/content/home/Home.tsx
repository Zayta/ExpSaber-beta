import { useParams, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Tab from '../../common/tabs/Tab';
import Tabs from '../../common/tabs/Tabs';
import { useScoresData, useSSPlayerData } from './data/api/hooks/ScoreSaberApi';
import ScoreSortOrder from './data/models/ScoreSortOrder';
import Search from './search/Search';
import PlayerDetails from './player-info/PlayerInfo';
import RecentPlays from './main/recent-plays/RecentPlays';
import ScoreSaberOverview from './main/ss-overview/SSProfile';
import { PlayerData } from './data/models/PlayerData';
import { QueryClientProvider, QueryErrorResetBoundary } from 'react-query';

import queryClient from './data/api/ClientProvider';
import  Score  from './data/models/ScoreData';

import { SettingsProvider, useSettings } from './context/settings/SettingsContext';
import { ErrorBoundary } from "react-error-boundary";

import { Suspense } from 'react';
import LoadingIndicator from '../../common/Loading';

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
const ErrorFallback:React.FC<{error:Error,resetErrorBoundary:(...args: unknown[]) => void}>=({error, resetErrorBoundary})=> {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
const myErrorHandler = (error: Error, info: {componentStack: any}) => {
  // Do something with the error
  // E.g. log to an error logging client here
  console.log('error handler')
  // console.log(error);
  // console.log(info.componentStack)
}

const Home = () =>{
  
  const params = useParams<HomeParams>();//grab params from url
  console.log('params',params)

  return <QueryClientProvider client={queryClient}>
    <SettingsProvider>
      <Search/>
    <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            // reset the state of your app so the error doesn't happen again
            console.log('reseting with params:',params)
          }}
          resetKeys={[params.ssid]}
          onError={myErrorHandler}
          >
            <Suspense fallback={<LoadingIndicator/>}>
            {
              params.ssid?
              <HomeContent ssid = {params.ssid}/>:
              <div/>
            }
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    
    
    </SettingsProvider>
    </QueryClientProvider>
}


const HomeContent:React.FC<{ssid:string}> =  ({ssid}) => {
  console.log('ssid is ',JSON.stringify(ssid));
  const {pages} = useSettings()!;
  console.log('pages:',pages)
  let ssPlayerData:PlayerData|undefined = useSSPlayerData(ssid);
  
  let ssScoresData:Score[]|undefined = useScoresData(ssid,ScoreSortOrder.RECENT,pages);
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
};



export default withRouter(Home);
