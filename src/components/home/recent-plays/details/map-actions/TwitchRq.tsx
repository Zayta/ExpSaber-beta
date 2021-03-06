//options to download, request map on twitch, view on Beatsaver

import { Twitch } from "react-feather";
import styled from "styled-components";

import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from "react";
const TwitchRqStyle = styled.span`
    
    color:inherit;
    background:inherit;
    :hover{
        cursor:pointer
    };
`;
const Copied = styled.div`
    font-size:0.5em;
`;
const TwitchRq:React.FC<TwitchRqProps> = ({bsr})=>{
    const [copied,setCopied] = useState<boolean>(false);
    function copy(copied:boolean){
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
          }, 1500);
    }
    return <TwitchRqStyle>
        <CopyToClipboard text={"!bsr "+bsr}
          onCopy={() => copy(true)}>
              {
                  copied?<Copied>Copied!</Copied>:
                  <Twitch/>
              }
        </CopyToClipboard>
    </TwitchRqStyle>
}
interface TwitchRqProps{
    bsr:string;
}
export default TwitchRq