function createTiles(file){
    file = file.split('\n');
    var x; var text; var img; var url;
    for (x in file) {
		if (x == ""){continue;}
	var a = document.createElement("A")
    	var tile = document.createElement("DIV");
    	tile.className="content-item";
		x = file[x].split(',');
        text = x[0]; 
        url = x[1];
	image = document.createElement("IMG");
	image.src = url+"tile.jpg";
	tile.appendChild(image);
	tile.appendChild(document.createTextNode(text));
	a.href = url;
	a.appendChild(tile);
	document.getElementById("content").appendChild(a);
    } 
}

function getText(page){
	var file = "/assets/other/"+page+"_tiles.txt";
    var request = new XMLHttpRequest();
    request.open('GET', file, true);
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
    
