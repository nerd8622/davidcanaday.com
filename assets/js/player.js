function createPlayer(){
  var stag = document.createElement('script');
  var ltag = document.createElement('link');
  stag.src = "https://cdn.plyr.io/3.6.2/plyr.js";
  ltag.rel = "stylesheet";
  ltag.href = "https://cdn.plyr.io/3.6.2/plyr.css";
  document.head.insertBefore(stag, document.getElementsByTagName('script')[0]);
  document.head.insertBefore(ltag, document.getElementsByTagName('link')[0]);
  const player = new Plyr('#player');
}
