document.querySelector("select").addEventListener("change", drawPyramid);
document.querySelector("input").addEventListener("input", drawPyramid);

function drawPyramid() {
 	var height = parseInt(document.getElementById("height").value);
    var symbol = document.getElementById("symbol").value;
    var pyramid = document.getElementById("pyramid");

    document.getElementById("disp").innerHTML = height;
    removeRows(document.getElementsByClassName("pyrmd"),pyramid)
     
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

var removeRows = function(rows,parent) {
     for (var i=rows.length;i>0;i--) {
        parent.removeChild(rows[i-1]);//counting up only removes half the lines
     }
};

var createRow = function() {

};
