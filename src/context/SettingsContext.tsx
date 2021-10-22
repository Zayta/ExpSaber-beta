//https://codesandbox.io/s/react-ts-complex-context-function-f1cv4?fontsize=14&hidenavigation=1&pages=dark&file=/src/index.tsx:0-1402
import * as React from "react";
import { defaultPages, defaultSortBy } from "../config";
import ScoreSortOrder from "../data/models/ScoreSortOrder";

type SettingsContextType = {
  

  pages: number;
  setPages: (value: number) => void;
  
  scoreSortOrder: ScoreSortOrder;
  setScoreSortOrder: (scoreSortOrder:ScoreSortOrder) => void;
};
const SettingsContext = React.createContext<SettingsContextType | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};
export const SettingsProvider = ({ children }: Props) => {
  const [pages, setPages] = React.useState(defaultPages);
  const [scoreSortOrder, setScoreSortOrder] = React.useState(defaultSortBy);

  React.useEffect(() => {
    // We'd get the pages from a web API / local storage in a real app
    // We've hardcoded the pages in our example
    const pages=defaultPages;
    setPages(pages);
  
  }, []);

  return (
    <SettingsContext.Provider value={{ pages, setPages, scoreSortOrder, setScoreSortOrder }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => React.useContext(SettingsContext);

