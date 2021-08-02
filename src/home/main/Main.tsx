import { RouteComponentProps, useParams, withRouter } from 'react-router-dom';
import { SSDataHook } from '../data/api/ScoreSaberApi';
import SearchName from '../search/search-players/SearchName';
//uses context data, makes sure values are not undefined or null
const Main =  () => {
  const params = useParams<MainParams>();
  
  let ssData = SSDataHook(params.ssid);
  return (
      <div>
        {params.ssid}
        {ssData.playerData?.playerInfo.playerName}
      </div>
  )
}

type MainParams = {
  ssid: string; //scoresaber id 
};


export default withRouter(Main);
