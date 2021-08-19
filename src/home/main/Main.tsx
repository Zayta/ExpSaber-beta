import { RouteComponentProps, useParams, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { SSDataHook } from '../data/api/ScoreSaberApi';
import Search from '../search/Search';
import PlayerDetails from './player-details/PlayerDetails';

const MainContainer = styled.div`
  margin:5px;
  box-sizing: border-box;
  display:flex;
  justify-content: space-around;
  flex-flow: row wrap;
  overflow-wrap:anywhere;
`;
const ItemWrapper = styled.div`width: fit-content;
height: fit-content;
background-color: var(--content-color);
border-radius: 10px;
margin: 5px;
box-sizing: border-box;

width: 50vw;
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
        <ItemWrapper>Yoyo</ItemWrapper>

        </MainContainer>
      </div>
  )
}

type MainParams = {
  ssid: string; //scoresaber id 
};


export default withRouter(Main);
