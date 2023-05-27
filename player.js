// Get the progress bar, audio element and play/pause icon
let progress= document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

// Set the maximum value of the progress bar to the duration of the song
// and set the initial value to the current time of the song
song.onloadedmetadata = function(){
progress.max = song.duration ;
progress.value = song.currentTime ;
}

// Function to play or pause the song and toggle the play/pause icon
function playPause(){
if (ctrlIcon.classList.contains("fa-pause")){
song.pause();
ctrlIcon.classList.remove("fa-pause");
ctrlIcon.classList.add("fa-play");
} else {
song.play();
ctrlIcon.classList.add("fa-pause");
ctrlIcon.classList.remove("fa-play");
}
}

// If the song is playing, update the progress bar value every 500ms
if(song.play()){
setInterval(()=> {
progress.value = song.currentTime;
},500);
}

// When the progress bar is changed, play the song from the new time and update the play/pause icon
progress.onchange = function(){
song.play();
song.currentTime = progress.value;
ctrlIcon.classList.add("fa-pause");
ctrlIcon.classList.remove("fa-play");
}