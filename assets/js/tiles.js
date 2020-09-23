function createTiles(file){
    file = file.split('\n');
    var x; var text; var img;
    for (x in file) {
		if (x == ""){continue;}
    	var tile = document.createElement("DIV");
    	tile.className="content-item";
		x = file[x].split(',');
        text = x[0]; 
        img = x[1];
	image = document.createElement("IMG");
	image.src = img;
	tile.appendChild(image);
	tile.appendChild(document.createTextNode(text));
	document.getElementById("content").appendChild(tile);
    } 
}

function getText(page){
	var file = "/assets/other/"+page+"_tiles.txt";
	console.log(file);
    var request = new XMLHttpRequest();
    request.open('GET', page, true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                createTiles(request.responseText);
            }
        }
    }
}
    
