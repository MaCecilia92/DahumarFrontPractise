let headerVideo = document.querySelector('#videoContainer');
let headerPlay = document.querySelector('#headerStop');


function ponerPausa() {
    if (headerVideo.paused){
        headerVideo.play()
        headerPlay.innerHTML ='<span class="icon-pause"></span>';
    } else {
        headerVideo.pause()
        headerPlay.innerHTML='<span class="icon-play2"></span>';
    }
}