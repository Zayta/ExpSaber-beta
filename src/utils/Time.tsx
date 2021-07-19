export function timeSince(dateStr:string){
    let date = new Date(dateStr);
    let dateNow = new Date()
    //difference
    let millisec=dateNow.getTime()-date.getTime();
    
    let seconds = parseFloat((millisec / 1000).toFixed(1));
    let minutes = parseFloat((millisec / (1000 * 60)).toFixed(1));
    let hours = parseFloat((millisec / (1000 * 60 * 60)).toFixed(1));
    let days = parseFloat((millisec / (1000 * 60 * 60 * 24)).toFixed(1));
    if (seconds < 60) {
        return Math.round(seconds) + " seconds";
    } else if (minutes < 60) {
        return Math.round(minutes) + " minutes";
    } else if (hours < 24) {
        return Math.round(hours) + " hrs";
    } else {
        return Math.round(days) + " days"
    }
}

//formats time as hh:mm:ss (https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds)
export function formatTime(duration:number)
{   
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}