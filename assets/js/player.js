function createPlayer(){
  // use id paramater from get request
  const gParams = new URLSearchParams(window.location.search);
  if (gParams.has('id')){id = gParams.get('id')}
  // create the player
  url = "https://www.youtube-nocookie.com/embed/" + id + "?controls=1&enablejsapi=1&modestbranding=1&showinfo=0&origin=https://www.davidcanaday.com&iv_load_policy=3&html5=1&fs=1&rel=0";
  player = document.getElementById("ytplayer");
  //fetch(url).then(res => {player.innerHTML = res;});
  fetch(url).then(res => {testvar = res;});
}
function related(){
  // get rid of the annoying related panel :)
  document.getElementsByClassName('date-20200903')[0].getElementsByClassName('ytp-pause-overlay')[0];
  annoying.parentElement.removeChild(annoying);
  document.getElementById("ytplayer").onclick = null;
}
