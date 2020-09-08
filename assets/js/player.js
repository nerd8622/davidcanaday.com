function createPlayer(){
  var stag = document.createElement('script');
  var ltag = document.createElement('link');
  stag.src = "https://cdn.plyr.io/3.6.2/plyr.js";
  ltag.rel = "stylesheet";
  ltag.href = "https://vjs.zencdn.net/7.8.4/video-js.css";
  document.head.insertBefore(stag, document.getElementsByTagName('script')[0]);
  document.head.insertBefore(ltag, document.getElementsByTagName('link')[0]);
  const player = new Plyr('#player');
}
