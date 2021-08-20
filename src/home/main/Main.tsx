import { RouteComponentProps, useParams, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { SSDataHook } from '../data/api/ScoreSaberApi';
import Search from '../search/Search';
import PlayerDetails from './player-details/PlayerDetails';

const MainContainer = styled.div`
  margin:5px;
  box-sizing: border-box;
  display:flex;
  justify-content: center;
  flex-flow: row wrap;
  overflow-wrap:anywhere;
  margin:1vw;
  @media only screen and (max-width: 800px){
    flex-flow:column nowrap;
  }
`;
const TabsContainer = styled.div`width: fit-content;
height:fit-content;
min-height: 60vh;
background-color: var(--content-color);
border-radius: 10px;
margin: 5px;
box-sizing: border-box;
align-self:center;

min-width: 50vw;
border:1px solid var(--txt-color3)
`;
const Main =  () => {
  const params = useParams<MainParams>();
  
  let ssData = SSDataHook(params.ssid);
  return (
      <div>
        <Search/>
        <MainContainer>
        {
          ssData.playerData?
          <div>
            <PlayerDetails playerInfo={ssData.playerData.playerInfo}/>
          </div>:
          <div>
          </div>
        }
        <TabsContainer>
          
        </TabsContainer>

        </MainContainer>
      </div>
  )
}

type MainParams = {
  ssid: string; //scoresaber id 
};


export default withRouter(Main);
