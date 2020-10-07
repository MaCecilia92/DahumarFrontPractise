let video = document.querySelector('#videotag');
let btnplay = document.querySelector('#btnplay');


function reproducir() {
    if (video.paused){
        video.play()
        btnplay.innerHTML ='<span class="icon-pause"></span>';
    } else {
        video.pause()
        btnplay.innerHTML='<span class="icon-play2"></span>';
    }
}

function stop() {
    video.currentTime=0
    video.pause();
    btnplay.innerHTML='<span class="icon-play2"></span>'
}

function skip(valor) {
    video.currentTime+= valor
    console.log(valor)

}
