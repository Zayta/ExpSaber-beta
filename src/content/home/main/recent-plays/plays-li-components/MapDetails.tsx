import { memo } from "react";
import { BeatSaverDataHook } from "../../../data/api-hooks/BeatSaverApi";

function MapDetails(props:MapDetailsProps) {
    console.log('mapdetail render')
  const mapData = BeatSaverDataHook(props.mapHash);
  return <div>
      {
          JSON.stringify(mapData)
      }
  </div>
}
interface MapDetailsProps{
    mapHash:string;
}
function hashChange(prevHash:MapDetailsProps,newHash:MapDetailsProps){
    return prevHash.mapHash!==newHash.mapHash;
}
export default memo(MapDetails, hashChange);
