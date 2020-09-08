function createPlayer(){
  // use id paramater from get request
  const gParams = new URLSearchParams(window.location.search);
  if (gParams.has('id')){id = gParams.get('id')}
  // create the player
  player = document.getElementById("ytplayer");
  player.src = "https://www.youtube-nocookie.com/embed/" + id + "?modestbranding=1&origin=https://davidcanaday.com&rel=0";
}
function related(){
  // get rid of the annoying related panel :)
  annoying = document.getElementsByClassName('ytp-pause-overlay')[0];
  annoying.parentElement.removeChild(annoying);
}
