//https://github.com/kate2811/tabs/blob/master/src/components/Tabs/Tab.tsx
import React from 'react'

type Props = {
  title: string
}

const Tab: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>
}

export default Tab