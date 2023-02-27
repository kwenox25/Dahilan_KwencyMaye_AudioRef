// collect all of the album covers into a variable
const albumCovers = document.querySelectorAll("#album-art img"),
    theAudioEl = document.querySelector('audio'),
    playBtn = document.querySelector('#playBtn'),
    pauseBtn = document.querySelector('#pauseBtn'),
    rewindBtn = document.querySelector('#rewindBtn'),
    volSlider = document.querySelector('#volumeControl');


function loadAudio() {
    let currentSource = `audio/${this.dataset.trackref}.mp3`;
    // set the new audio source
    theAudioEl.src = currentSource;
    // load the new audio source
    theAudioEl.load();
    //tell the audio element to play
    playAudio();
}
    
// tell the audio element to play
function playAudio() {
    theAudioEl.play();
}

function restartAudio() {
    theAudioEl.currentTime = 0;
}

function pauseAudio() {
    theAudioEl.pause();
}

function setVolume() {
    // get the numeric value of the volume slider between 0 (min) and 100 (max)
    // that's what the volume of the audio should be
    console.log(this.value);

    theAudioEl.volume = this.value/100; // divide the value to get a floating point between 0 and 1
    // and then set the audio element's volume
}
// add event handling to the album covers (listen for a click event)
albumCovers.forEach(cover => cover.addEventListener('click', loadAudio));

// add event handling for the custom controls
playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);
rewindBtn.addEventListener('click', restartAudio);

volSlider.addEventListener('change', setVolume);
