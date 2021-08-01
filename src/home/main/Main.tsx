import { RouteComponentProps, useParams, withRouter } from 'react-router-dom';
import { SSDataHook } from '../data/api/Api';
//uses context data, makes sure values are not undefined or null
const Main =  () => {
  const params = useParams<MainParams>();
  
  let ssData = SSDataHook(params.ssid);
  return (
      <div>
        {ssData.playerData?.playerInfo.playerName}
      </div>
  )
}

type MainParams = {
  ssid: string; //scoresaber id 
};

type MainProps = RouteComponentProps<MainParams>;

export default withRouter(Main);
