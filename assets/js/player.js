function createPlayer(){
  const gParams = new URLSearchParams(window.location.search);
  //if (gParams.has('id')){ytId = gParams.get('id')}
  ytId = "hQfNtnKm5nA";
  var player;
  function onYoutubePlayerAPIReady() {
    console.log("started player")
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: ytId,
      modestbranding: '1',
      rel: '0'
    });
  }
}
