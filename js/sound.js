var downtownAudio = new Audio('../assets/audio/mp3/flakey-flake.mp3');
     var bAudio = new Audio('b.mp3');
     function myAudioFunction(soundCue) {
         if(soundCue == 'downtown') {
             aAudio.play();
         } else if(letter == 'b') {
             bAudio.play();
         }
     }
