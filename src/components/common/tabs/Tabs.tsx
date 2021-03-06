//code taken and modified from https://github.com/kate2811/tabs/blob/master/src/components/Tabs/Tabs.tsx
import React, { ReactElement, useState } from "react"
import styled from "styled-components";
import TabTitle from "./TabTitle"

type Props = {
  children: ReactElement[]
}

const TabsStyle = styled.div`
    display:flex;
    flex-flow:row wrap;
    border-bottom:1px solid var(--txt-color3);
`;
const ContentStyle = styled.div`
    padding:5px;
`;
const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)
  function isSelected(tab:number){
    return selectedTab===tab;
  }
  return (
      <div>
          
    <TabsStyle>
        {children.map((item, index) => (
          <TabTitle 
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
            isSelected={isSelected}
          />
        ))}
      </TabsStyle>
      <ContentStyle>
        {children[selectedTab]}
      </ContentStyle>
    </div>
  )
}

export default Tabs