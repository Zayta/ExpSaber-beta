import React from "react";

const SettingsContext = React.createContext<{maxPages:number}|undefined>(undefined);



type SettingsProviderProps = {children: React.ReactNode}
function SettingsProvider({children}: SettingsProviderProps){
    const [maxPages, setMaxPages] = React.useState({maxPages:10});
    return <SettingsContext.Provider value={maxPages}>{children}</SettingsContext.Provider>
}


export {SettingsProvider}