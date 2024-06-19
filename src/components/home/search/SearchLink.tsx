
import styled from "styled-components";
import { useSettings } from "../../../context/SettingsContext";

const SearchIconStyle = styled.span`
width:fit-content;
`;
const SearchLink:React.FC = ({children}) =>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {toggled, setToggled} = useSettings()!;
    return <SearchIconStyle onClick={()=>setToggled(false)}>{children}</SearchIconStyle>
}
export default SearchLink;