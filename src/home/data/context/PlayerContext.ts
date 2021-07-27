import { createContext, useContext } from "react";
import { PlayerData } from "../models/PlayerData";
import ScoresData from "../models/ScoreData";

export interface Player{
  playerData:PlayerData,
  scoresData:ScoresData,
}
export interface PlayerContextData {
  ssid:string|undefined,
  setSsid:(ss_id:string)=>void,
  playerData:PlayerData|undefined,
  scoresData:ScoresData|undefined,
    isLoading: boolean,
    fetchPlayer: () => void,
    fetchScores: ()=>void
}
export const PlayerContext = createContext<PlayerContextData|undefined>(undefined);

//makes sure useContext(PostsContext) is defined
export function usePlayerContext() {
  const playerContext = useContext(PlayerContext);
  if (!playerContext) {
    throw new Error('usePlayerContext must be used within the PlayerContext.Provider');
  }
  return playerContext;
}

