let displayTime = document.getElementById('time')
let playButton = document.getElementById('playButton')
let pauseButton = document.getElementById('pauseButton')
let resetButton = document.getElementById('resetButton')
let timeStopped = true;
let hh=0;
let mm=0;
let ss=0;


playButton.addEventListener('click',startStopwatch)
pauseButton.addEventListener('click',stopStopwatch)
resetButton.addEventListener('click',resetButtonFunc)
function startStopwatch(){
    if(timeStopped){
        timeStopped = false;
        setTimeout(stopWatchCycle,1000)
        showButton('pause')
    }
    
}
function stopWatchCycle(){

    if(timeStopped === false){
        ss=parseInt(ss)
        mm=parseInt(mm)
        hh=parseInt(hh)
        ss+=1;

        if(ss===60){
            mm+=1
            ss=0

        }
        if(mm===60){
            hh+=1
            mm=0
        }

        ss = ss.toString().padStart(2,'0')
        mm = mm.toString().padStart(2,'0')
        hh = hh.toString().padStart(2,'0')
        displayTime.innerHTML = `${hh}:${mm}:${ss}`
    setTimeout(stopWatchCycle,1000)

    }




}

function stopStopwatch(){
    if(timeStopped===false){
        timeStopped=true;
        showButton('play')
    }
}

function showButton(action){

    if(action == 'play'){

        playButton.style.display='block'
        pauseButton.style.display='none'
    }
    else{
        playButton.style.display='none'
        pauseButton.style.display='block'
    }
}
function resetButtonFunc(){
    displayTime.innerHTML ='00:00:00'
    timeStopped=true;
    ss=0;
    hh=0;
    mm=0;
    showButton('play')

}