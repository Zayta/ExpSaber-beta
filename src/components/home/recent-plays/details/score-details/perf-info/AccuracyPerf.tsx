import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { AccuracyTracker } from "../../../../../../data/models/BeatSaviorData";
import { round } from "../../../../../../utils/Math";

const AccuracyPerf = ({accTracker}:AccProps) =>{
    const leftColor = '#f70063';
        const rightColor = '#25ecf7';
        return <div >
            
             <div className = 'total-acc'>
                 <div className = "acc-lbl">
                    <div className = 'lbl'>Accuracy</div>
                    {round(accTracker.averageAcc)}
                 </div>
                 <div className = "acc-lbl">
                    <div className = 'lbl'>Speed</div>
                    {round(accTracker.averageSpeed)}
            
                 </div>
                 <div className = "acc-lbl">
                    <div className = 'lbl'>Time Dependence</div>
                    {round(accTracker.averageTimeDependence)}
                 </div>
            
            
            
        </div>
        
        <div className = 'accPerf-container'>
       
        
        <div className = 'hand-acc'>
        <div className = 'per-hand-acc'>
            <div className = 'acc-chart'>
            <div className='chart'>
            <CircularProgressbar styles = {buildStyles({pathColor:leftColor,textColor:leftColor})} value={accTracker.accLeft} text = {""+round(accTracker.accLeft,2)} maxValue={115} minValue={70}/>
            </div>
            {renderAvgCut(accTracker.leftAverageCut,leftColor)}
            </div>
            <div className = 'acc-lbls'>
            <div className='acc-lbl'><div className = 'lbl'>PreSwing</div> <div style = {{color:leftColor}}>{round(accTracker.leftPreswing,2)}</div></div>
            <div className='acc-lbl'><div className = 'lbl'>PostSwing</div> <div style = {{color:leftColor}}>{round(accTracker.leftPostswing,2)}</div></div>
            <div className='acc-lbl'><div className = 'lbl'>Speed (m/s)</div> <div style = {{color:leftColor}}>{round(accTracker.leftSpeed,2)}</div></div>
            <div className='acc-lbl'><div className = 'lbl'>TimeDependence</div> <div style = {{color:leftColor}}>{round(accTracker.leftTimeDependence,2)}</div></div>
            </div>
        </div>
        <div className = 'per-hand-acc'>

            <div  style = {{flexFlow:'row-reverse wrap'}}className = 'acc-chart'>
            <div className='chart'>
            <CircularProgressbar styles = {buildStyles({pathColor:rightColor,textColor:rightColor})} value={accTracker.accRight} text = {""+round(accTracker.accRight,2)} maxValue={115} minValue={70}/>
            </div>
            {renderAvgCut(accTracker.rightAverageCut,rightColor)}
            </div>


            <div className = 'acc-lbls'>
            <div className='acc-lbl'><div className = 'lbl'>PreSwing</div> <div style = {{color:rightColor}}>{round(accTracker.rightPreswing,2)}</div></div>
            <div className='acc-lbl'><div className = 'lbl'>PostSwing</div> <div style = {{color:rightColor}}>{round(accTracker.rightPostswing,2)}</div></div>
            <div className='acc-lbl'><div className = 'lbl'>Speed (m/s)</div> <div style = {{color:rightColor}}>{round(accTracker.rightSpeed,2)}</div></div>
            <div className='acc-lbl'><div className = 'lbl'>TimeDependence</div> <div style = {{color:rightColor}}>{round(accTracker.rightTimeDependence,2)}</div></div>
            </div>
        </div>
        </div>

        </div>
        
        </div>
}
const renderAvgCut = (avgCut:Array<number>, color:string) =>{

    return <div className = 'avgCut'>
        <div className = 'acc-lbl'>
            <div className = 'lbl'>
                Before cut
            </div>
            <div style = {{color:color}}>
            {avgCut.length>0?round(avgCut[0],2):'N/A'}
            </div>
            <div className = 'lbl'>
                Accuracy
            </div>
            
            <div style = {{color:color}}>
            {avgCut.length>1?round(avgCut[1],2):'N/A'}
            </div>
            <div className = 'lbl'>
                After cut
            </div>
            
            <div style = {{color:color}}>
            {avgCut.length>2?round(avgCut[2],2):'N/A'}
            </div>
        </div>
        
    </div>;
}

interface AccProps{
    accTracker:AccuracyTracker
}
export default AccuracyPerf;