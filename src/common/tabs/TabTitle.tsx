//https://github.com/kate2811/tabs/blob/master/src/components/Tabs/TabTitle.tsx
import React, { useCallback } from "react"
import styled from "styled-components";

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}
const TabTitleStyle = styled.div`
    button{
        background:inherit;
        color: var(--txt-color3)
    }
    h3{
        margin:0
    }
`;
const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {

  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <TabTitleStyle>
      <button onClick={onClick}><h3>{title}</h3></button>
    </TabTitleStyle>
  )
}

export default TabTitle