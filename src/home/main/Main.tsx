import { RouteComponentProps, useParams, withRouter } from 'react-router-dom';
import { SSDataHook } from '../data/api/ScoreSaberApi';
import Search from '../search/Search';
import SearchName from '../search/search-players/SearchName';
import PlayerDetails from './player-details/PlayerDetails';
//uses context data, makes sure values are not undefined or null
const Main =  () => {
  const params = useParams<MainParams>();
  
  let ssData = SSDataHook(params.ssid);
  return (
      <div>
        {params.ssid}
        {
          ssData.playerData?
          <div>
            <PlayerDetails playerInfo={ssData.playerData.playerInfo}/>
          </div>:
          <div>
          </div>
        }
      </div>
  )
}

type MainParams = {
  ssid: string; //scoresaber id 
};


export default withRouter(Main);
