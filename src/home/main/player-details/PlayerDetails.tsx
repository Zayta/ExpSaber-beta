import { useContext, useEffect} from 'react'
import { PlayerContext, usePlayerContext } from '../../data/context/PlayerContext'
import './player-details.scss'

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

const PlayerDetails = () => {
  
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
  
export default PlayerDetails