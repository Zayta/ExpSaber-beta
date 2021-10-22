
import styled from "styled-components";
import { useSettings } from "../../../context/SettingsContext";

const SearchIconContainer = styled.span`
width:fit-content;
`;
const SearchLink:React.FC = ({children}) =>{
    const {toggled, setToggled} = useSettings()!;
    return <SearchIconContainer onClick={()=>setToggled(false)}>{children}</SearchIconContainer>
}
export default SearchLink;