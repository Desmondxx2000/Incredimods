var delayInMilliseconds = 6857;
var downtownAudio = new Audio('../assets/audio/mp3/flakey-flake.mp3');
var bAudio = new Audio('b.mp3');

setTimeout(function() {
function myAudioFunction(soundCue) {
     if(soundCue == 'downtown') {
          aAudio.play();
     } else if(letter == 'b') {
          bAudio.play();
     }
}
}, delayInMilliseconds);
