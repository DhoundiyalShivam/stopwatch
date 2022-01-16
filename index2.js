//Epoch & Unix Timestamp Conversion Tools
let displayTime = document.getElementById('time')
let playButton = document.getElementById('playButton')
let pauseButton = document.getElementById('pauseButton')
let resetButton = document.getElementById('resetButton')
let startTime;
let elapsedTime = 0
let stopWatchInterval;

function timeToString(time){
    let diffInHrs = time/3600000;
    let hh = Math.floor(diffInHrs);
    let diffInMin =(diffInHrs - hh)*60
    let mm =Math.floor(diffInMin)

    let diffInSec = (diffInMin - mm)*60
    let ss = Math.floor(diffInSec); 

    let diffInMs = (diffInSec-ss)*1000
    let ms = Math.floor(diffInMs)

    
    let formattedHH = hh.toString().padStart(2,"0")
    let formattedMM = mm.toString().padStart(2,"0")
    let formattedSS = ss.toString().padStart(2,"0")
    let formattedMS = ms.toString().padStart(3,"0")

    displayTime.innerHTML = `${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS}`

}
function startStopwatch(){
    startTime = Date.now() - elapsedTime;

    stopWatchInterval = setInterval(function printTime(){
        elapsedTime = Date.now()- startTime;
        timeToString(elapsedTime)
    },1)
    showButton('pause')
}
function stopStopwatch(){
clearInterval(stopWatchInterval)
showButton('play')
}
function resetStopwatch(){
    clearInterval(stopWatchInterval)
    displayTime.innerHTML = `00:00:00:000`
    elapsedTime=0;
    showButton('play')
}
function showButton(buttonKey){

    if(buttonKey=='play'){
        playButton.style.display="block"
        pauseButton.style.display="none"
    }else{
        playButton.style.display="none"
        pauseButton.style.display="block"
    }
}
playButton.addEventListener("click",startStopwatch)
pauseButton.addEventListener("click",stopStopwatch)
resetButton.addEventListener("click",resetStopwatch)