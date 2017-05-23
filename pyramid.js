var button = document.querySelector("button");
button.addEventListener("click", function() {
    var height = parseInt(document.getElementById("height").value);
    var symbol = document.getElementById("symbol").value;
    drawPyramid(height, symbol);
});

 function drawPyramid(height, symbol) {
     var prgh = document.getElementsByClassName("pyrmd");
     var pyramid = document.getElementById("pyramid");
     while (prgh.length > 0) {
        pyramid.removeChild(prgh[0]);
     }
     
     for (var i=0;i<height;i++) {
         var row = "";
         for (var j=0;j<height;j++) {
         	if (j<(height-1-i)) {
         		row += " ";
         	} else {
         		row += symbol;
         	}
         }

        textElem = document.createTextNode(row);
        rowElem = document.createElement("p");
        rowElem.setAttribute("class", "pyrmd");
        rowElem.appendChild(textElem);
        pyramid.appendChild(rowElem);
    }
}
