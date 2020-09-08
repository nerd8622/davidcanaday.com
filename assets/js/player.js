function createPlayer(){
  const gParams = new URLSearchParams(window.location.search);
  if (gParams.has('id')){id = gParams.get('id')}
  player = document.getElementById("ytplayer");
  player.src = "https://www.youtube.com/embed/" + id + "?modestbranding=1&origin=https://davidcanaday.com&rel=1";
}
