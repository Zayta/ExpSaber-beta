//https://codesandbox.io/s/react-ts-complex-context-function-f1cv4?fontsize=14&hidenavigation=1&maxPages=dark&file=/src/index.tsx:0-1402
import * as React from "react";
import { render } from "react-dom";

const defaultMaxPages = 10;
type SettingsContextType = {
  maxPages: number;
  setMaxPages: (value: number) => void;
};
const SettingsContext = React.createContext<SettingsContextType | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};
export const SettingsProvider = ({ children }: Props) => {
  const [maxPages, setMaxPages] = React.useState(defaultMaxPages);

  React.useEffect(() => {
    // We'd get the maxPages from a web API / local storage in a real app
    // We've hardcoded the maxPages in our example
    const maxPages=10;
    setMaxPages(maxPages);
  }, []);

  return (
    <SettingsContext.Provider value={{ maxPages, setMaxPages }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => React.useContext(SettingsContext);

