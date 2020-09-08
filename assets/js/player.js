function loaded(tag){
  const player = new Plyr('#player');
  tag.onload = null;
}
function createPlayer(){
  var stag = document.createElement('script');
  var ltag = document.createElement('link');
  stag.src = "https://cdn.plyr.io/3.6.2/plyr.js";
  stag.onload = function() {loaded(stag);};
  ltag.rel = "stylesheet";
  ltag.href = "https://cdn.plyr.io/3.6.2/plyr.css";
  document.head.insertBefore(stag, document.getElementsByTagName('script')[0]);
  document.head.insertBefore(ltag, document.getElementsByTagName('link')[0]);

}
