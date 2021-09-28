import { memo } from "react";
import useBeatSaverData from "../../../data/api/hooks/BeatSaverApi";

function MapDetails(props:MapDetailsProps) {
    console.log('mapdetail render')
  const { status, data, error, isFetching } = useBeatSaverData(props.mapHash);

  return <div>
      {
          JSON.stringify(data)
      }
  </div>
}
interface MapDetailsProps{
    mapHash:string;
}
export default MapDetails;
