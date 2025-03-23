let delayInMilliseconds = 6857;
let downtownAudio = new Audio('../assets/audio/mp3/flakey-flake.mp3');
let bAudio = new Audio('b.mp3');

setTimeout(function() {
function myAudioFunction(soundCue) {
     if(soundCue == 'downtown') {
          downtownAudio.play();
     } else if(letter == 'b') {
          bAudio.play();
     }
}
}, delayInMilliseconds);
