import { maxPages } from "../../data/constants/Constants";
import { useSettings } from "../../context/SettingsContext";

const SelectPages = () => {
    const { pages, setPages } = useSettings()!;
    let opts = [];
    for(let i = 1; i<=maxPages;i++){
        opts.push(<option key = {i} value = {i}>{i}</option>)
    }
    return (
      <div>
        <select defaultValue={pages} onChange={e => setPages(parseInt(e.currentTarget.value))}>
          {opts}
        </select>
        <span>Select pages</span>
      </div>
    );
  };
export default SelectPages;