import { SSDataHook } from '../data/api/Api';
//uses context data, makes sure values are not undefined or null
const Main = (props:MainProps)=> {
    console.log('ssid')
    console.log(props.ssid)
    let ssData = SSDataHook(props.ssid);
    console.log('Main');
    console.log(ssData);
    return  <div>
      {
        ssData.playerData?.playerInfo.playerName
      }
    </div>
}
interface MainProps{
  ssid:string
}
export default Main;
