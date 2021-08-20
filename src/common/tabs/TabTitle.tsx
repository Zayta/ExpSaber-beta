//https://github.com/kate2811/tabs/blob/master/src/components/Tabs/TabTitle.tsx
import React, { useCallback } from "react"

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {

  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <div>
      <button onClick={onClick}>{title}</button>
    </div>
  )
}

export default TabTitle