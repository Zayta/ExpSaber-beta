//https://github.com/kate2811/tabs/blob/master/src/components/Tabs/TabTitle.tsx
import React, { useCallback } from "react"
import styled from "styled-components";
const TabTitleStyle = styled.div`
    button{
        background:inherit;
        color: var(--txt-color3)
    }
    h3{
        margin:0
    }
    .isSelected{
      color:var(--txt-color3);
      cursor:default;
    }
    .isNotSelected{
      color:grey;
    }
`;
const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index,isSelected }) => {

  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <TabTitleStyle>
      <button onClick={onClick}><h3 className={isSelected(index)?'isSelected':'isNotSelected'}>{title}</h3></button>
    </TabTitleStyle>
  )
}
type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
  isSelected: (tab:number)=>boolean
}

export default TabTitle