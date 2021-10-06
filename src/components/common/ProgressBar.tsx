import { round } from "../../utils/Math";

//https://dev.to/ramonak/react-how-to-create-a-custom-value-bar-component-in-5-minutes-2lcl
const ProgressBar:React.FC<{bgcolor?:string,value:number,maxValue?:number, label?:string}> = ({ bgcolor, value,maxValue,label }) => {
    if(!maxValue){
        maxValue=100;
    }
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${round(value/maxValue)*100}%`,
      backgroundColor: `${bgcolor?bgcolor:'var(--txt-color3)'}`,
      borderRadius: 'inherit'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{label?label:`${value/maxValue}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;