import { createContext, useState } from "react";
import { PlayerData } from "../models/PlayerData";
import ScoresData from "../models/ScoreData";

export interface Player{
  playerData:PlayerData,
  scoresData:ScoresData,
}
export interface PlayerContextData {
    player:Player
    isLoading: boolean,
    fetchPlayer: () => void
}
   
export const PlayerContext = createContext<PlayerContextData|undefined>(undefined);