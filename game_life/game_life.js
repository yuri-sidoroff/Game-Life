var lineBegin = "<tr>";
var lineFinish = "</tr>";
var cell = "<td>1</td>";
var arr = [];

var n = 0;
var m = 0;
while (n != 10) {
    arr[n] = [];
        while (m != 10) {
            arr [n] [m] = cell;
            m++;
        }
    n++;
    m = 0;
}

var x = 0;
var y = 0;
document.write ("<table>");
while (x != 10) {
    document.write (lineBegin);
    while (y != 10) {
    document.write (arr[x][y]);
    y++;
    }
    document.write (lineFinish);
    x++;
    y = 0;
}
var numberHeight;
var numberWight;
document.write ("</table>");

function getSize() {
            
    var numberHeight = document.getElementById("sizeHeight").value;
    var numberWidth = document.getElementById("sizeWidth").value;
    document.write (numberHeight);
    document.write (numberWidth);
}