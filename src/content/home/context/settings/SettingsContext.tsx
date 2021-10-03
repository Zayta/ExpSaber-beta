//https://codesandbox.io/s/react-ts-complex-context-function-f1cv4?fontsize=14&hidenavigation=1&pages=dark&file=/src/index.tsx:0-1402
import * as React from "react";
import { render } from "react-dom";

const defaultMaxPages = 10;
type SettingsContextType = {
  pages: number;
  setPages: (value: number) => void;
};
const SettingsContext = React.createContext<SettingsContextType | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};
export const SettingsProvider = ({ children }: Props) => {
  const [pages, setPages] = React.useState(defaultMaxPages);

  React.useEffect(() => {
    // We'd get the pages from a web API / local storage in a real app
    // We've hardcoded the pages in our example
    const pages=10;
    setPages(pages);
  }, []);

  return (
    <SettingsContext.Provider value={{ pages, setPages }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => React.useContext(SettingsContext);

