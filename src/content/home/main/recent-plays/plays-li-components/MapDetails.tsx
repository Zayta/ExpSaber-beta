import styled from "styled-components";
import useBeatSaverData from "../../../data/api/hooks/BeatSaverApi";
const MapDetailsContainer = styled.div`
    display:flex;
    overflow-wrap:anywhere;
`;
function MapDetails(props:MapDetailsProps) {
  const { status, data, error, isFetching } = useBeatSaverData(props.mapHash);

  return <MapDetailsContainer>
      {
          JSON.stringify(data)
      }
  </MapDetailsContainer>
}
interface MapDetailsProps{
    mapHash:string;
}
export default MapDetails;
