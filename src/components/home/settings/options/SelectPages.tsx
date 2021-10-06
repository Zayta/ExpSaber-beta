import { maxPages } from "../../../../config/Constants";
import { useSettings } from "../../../../context/SettingsContext";

const SelectPages = () => {
    const { pages, setPages } = useSettings()!;
    let opts = [];
    for(let i = 1; i<=maxPages;i++){
        opts.push(<option key = {i} value = {i}>{i}</option>)
    }
    return (
      <div>
        
        <span style = {{'margin':'10px'}}>Select pages</span>
        <select defaultValue={pages} onChange={e => setPages(parseInt(e.currentTarget.value))}>
          {opts}
        </select>
      </div>
    );
  };
export default SelectPages;