import {Component} from 'react'
import { TrackerStat} from '../../../../../../data/models/BeatSaviorData';
import AccuracyPerf from './AccuracyPerf';


export default class PerfInfo extends Component<PerfInfoProps>{
    constructor(props:PerfInfoProps){
        super(props);
        this.renderAccuracyStats.bind(this);
    }
    componentDidMount(){
        
    }
    render() {
        return <div className = 'perf-info-wrapper'>
            <h3>Tracker Stats</h3>
            <div>
                {
                    this.renderAccuracyStats()
                }
            </div>
            </div>
    }
    renderAccuracyStats = () =>{
        if(this.props.trackerStats.length){
            let accStatsJSX:JSX.Element[] = [];
            
            this.props.trackerStats.forEach(
                stat =>{
                    let accTracker = stat.trackers.accuracyTracker;
                    accStatsJSX.push(
                    <div className = 'acc-perf-container' key={stat._id}>
                        <div>{stat.songName} - {stat.songMapper} -{stat.songDifficulty} </div>
                        
                        {
                            <AccuracyPerf accTracker = {accTracker}/>
                        }
                    </div>)

                }
            )
            
            return <div >{accStatsJSX}</div>
        }
        return <div></div>
    }
   
}

interface PerfInfoProps{
    trackerStats:Array<TrackerStat>
}