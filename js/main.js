// collect all of the album covers into a variable
let albumCovers = document.querySelectorAll("#album-art img"),
    theAudioEl = document.querySelector('audio');

// tell the audio element to play
function playAudio() {
    // debug (test) your code at this porint before you add anything else
    theAudioEl.play();

}

// add event handling to the album covers (listen for a click event)
albumCovers.forEach(cover => cover.addEventListener('click', playAudio));