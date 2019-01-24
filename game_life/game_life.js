function gameLife() {
    var numberHeight = 15;//Высота поля
    var numberWidth = 30;//Ширина поля
    var arr = [];//Поле - двумерный массив
    var n = 0;
    var m = 0;
    var trId;
    var tableId;
    while (n != numberHeight) {
        arr[n] = [];
        tableId = document.getElementById("tableGame");
        tableId.insertAdjacentHTML("beforeEnd", "<tr id='trGame" + n + "'></tr>");
            while (m != numberWidth) {
                var cellState = Math.round(Math.random());
                if (cellState == 0) {
                    arr [n] [m] = cellState;
                    trId = document.getElementById("trGame"+n);
                    trId.insertAdjacentHTML("beforeEnd", "<td style='color:white;background-color:white'>" + cellState + "</td>");
                    m++;
                } else {
                    arr [n] [m] = cellState;
                    trId = document.getElementById("trGame"+n);
                    trId.insertAdjacentHTML("beforeEnd", "<td style='color:red;background-color:red'>" + cellState + "</td>");
                    m++; 
                }
            }
        n++;
        m = 0;
    }
    setTimeout(gameLife,2000);
}
gameLife();