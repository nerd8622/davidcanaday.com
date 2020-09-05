function getText(){
    var request = new XMLHttpRequest();
    request.open('GET', 'assets/other/tiles.txt', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                return request.responseText;
            }
        }
    }
}

function createTiles(){
    var tiles = getText();
    tiles = tiles.split('\n');
    var tile = document.createElement("DIV");
    var x, text, img;
    for (x in tiles) {
	x = x.split(',');
        text, img = x[0], x[1];
	image = document.createElement("IMG");
	image.src = img;
	tile.appendChild(image);
	tile.appendChild(document.createTextNode(text));
	document.getElementById("content").appendChild(tile);
    } 
}

createTiles()
    