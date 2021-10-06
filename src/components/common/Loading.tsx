import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';
const LoadingIndicator = () => {
    const { promiseInProgress } = usePromiseTracker();
    if(promiseInProgress){
        return <div style = {{'alignSelf':'center'}}><Loader type = "ThreeDots" color="#ffffff"/></div>
    }
    else{
        return <div></div>
    }
}
export default LoadingIndicator