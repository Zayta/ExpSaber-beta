import { createContext, useState } from "react";
import { PlayerData } from "../models/PlayerData";
import ScoresData from "../models/ScoreData";

export interface Player{
  playerData:PlayerData,
  scoresData:ScoresData,
}
export interface PlayerContextData {
    
  playerData:PlayerData|undefined,
  scoresData:ScoresData|undefined,
    isLoading: boolean,
    fetchPlayer: () => void,
    fetchScores: ()=>void
}
export const PlayerContext = createContext<PlayerContextData|undefined>(undefined);