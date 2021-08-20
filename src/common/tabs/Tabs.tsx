//code taken and modified from https://github.com/kate2811/tabs/blob/master/src/components/Tabs/Tabs.tsx
import React, { ReactElement, useState } from "react"
import TabTitle from "./TabTitle"

type Props = {
  children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div>
      <div>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </div>
      {children[selectedTab]}
    </div>
  )
}

export default Tabs