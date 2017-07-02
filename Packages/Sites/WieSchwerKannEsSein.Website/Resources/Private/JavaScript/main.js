var podcast = document.getElementById("playPause");
var sound = new Howl({
  src: [podcast.dataset.podcastfile]
});
podcast.addEventListener("click",
  function (event) {
    if(sound.playing()) {
      sound.pause();
      podcast.classList.remove("playing");
    } else {
      sound.play();
      podcast.className += "playing";
    }
  },
  false);
