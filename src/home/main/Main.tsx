import { useContext, useEffect} from 'react'
import { PlayerContext, usePlayerContext } from '../data/context/PlayerContext'
import './main.scss'

//loads player details
function usePlayerLoading() {
  const {fetchPlayer} = usePlayerContext();
 
  useEffect(() => {
    fetchPlayer()
  }, [fetchPlayer])
}
//loads player scores
function useScoresLoading() {
  const {fetchScores} = usePlayerContext();
 
  useEffect(() => {
    fetchScores()
  }, [fetchScores])
}

const Main = () => {
  
  const { playerData, scoresData } = usePlayerContext();
  usePlayerLoading();
  useScoresLoading();
  return (
    <div>
      Name:
      {
        playerData?.playerInfo?.playerName
      }
      Scores:{
        scoresData?.scores?.toString()
      }
    </div>
  )
  }
  
export default Main