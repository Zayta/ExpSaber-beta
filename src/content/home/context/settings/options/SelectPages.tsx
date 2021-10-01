import { useSettings } from "../SettingsContext";

const SelectPages = () => {
    const { maxPages, setMaxPages } = useSettings()!;
    let opts = [];
    for(let i = 1; i<=maxPages;i++){
        opts.push(<option key = {i} value = {i}>{i}</option>)
    }
    return (
      <div>
        <select value={maxPages} onChange={e => setMaxPages(parseInt(e.currentTarget.value))}>
          {opts}
        </select>
        <span>Select pages</span>
      </div>
    );
  };
export default SelectPages;