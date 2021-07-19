import { createContext, useState } from "react";
import { PlayerData } from "../data/PlayerData";
import ScoresData from "../data/ScoreData";

export interface PlayerContextData {
    playerData:PlayerData|null,
    scoresData:ScoresData|null
}
   
  export const playerContextDefaultValue: PlayerContextData = {
    playerData:null,
    scoresData:null
  }
export const PostsContext = createContext<PlayerContextData>(playerContextDefaultValue);