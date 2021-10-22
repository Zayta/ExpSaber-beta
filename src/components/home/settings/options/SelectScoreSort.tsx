import { useSettings } from "../../../../context/SettingsContext";
import ScoreSortOrder from "../../../../data/models/ScoreSortOrder";
import { mapToScoreSortOrder } from "../../../../data/parsers/ScoreSortOrderParser";

const SelectScoreSortOrder = () => {
    const { scoreSortOrder, setScoreSortOrder } = useSettings()!;
    
    return (
      <div style = {{'marginBottom':'5px'}}>
        
        <span style = {{'margin':'10px'}}>Scores:</span>
        <select defaultValue={scoreSortOrder} onChange={e => setScoreSortOrder(mapToScoreSortOrder(e.currentTarget.value))}>
        <option key = {'recent'} value = {ScoreSortOrder.RECENT}>Recent</option>
        <option key = {'top'} value = {ScoreSortOrder.TOP}>Top</option>
        </select>
      </div>
    );
  };
export default SelectScoreSortOrder;