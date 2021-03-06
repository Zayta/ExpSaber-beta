import { maxPages } from "../../../../config";
import { useSettings } from "../../../../context/SettingsContext";

const SelectPages = () => {
    const { pages, setPages } = useSettings()!;
    let opts = [];
    for(let i = 1; i<=maxPages;i++){
        opts.push(<option key = {i} value = {i}>{i}</option>)
    }
    return (
      <div style = {{'marginBottom':'5px'}}>
        
        <span style = {{'margin':'10px'}}>Pages:</span>
        <select defaultValue={pages} onChange={e => setPages(parseInt(e.currentTarget.value))}>
          {opts}
        </select>
      </div>
    );
  };
export default SelectPages;