function createPlayer(){
  const gParams = new URLSearchParams(window.location.search);
  //if (gParams.has('id')){ytId = gParams.get('id')}
  ytId = "hQfNtnKm5nA";
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var first = document.getElementById('player');
  first.parentNode.insertBefore(tag, first);
  var player;
  function onYoutubePlayerAPIReady() {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: ytId,
      modestbranding: '1',
      rel: '0'
    });
  }
}
