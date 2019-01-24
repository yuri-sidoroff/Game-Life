setInterval(function() {
    var numberHeight = 15;//Высота поля
    var numberWidth = 30;//Ширина поля
    var arr = [];//Поле - двумерный массив
    var n = 0;
    var m = 0;
    var table = document.createElement('table');
    document.body.insertBefore(table, document.body.firstChild);
    while (n != numberHeight) {
        arr[n] = [];
        var tr = document.createElement('tr');
        table.appendChild(tr);
            while (m != numberWidth) {
                var cellState = Math.round(Math.random());
                if (cellState == 0) {
                    arr [n] [m] = cellState;
                    var td = document.createElement('td');
                    td.setAttribute("class", "cellDead");  
                    tr.appendChild(td);
                    m++;
                } else {
                    arr [n] [m] = cellState; 
                    var td = document.createElement('td');
                    td.setAttribute("class", "cellLife");  
                    tr.appendChild(td);                 
                    m++; 
                }
            }
        m = 0;
        n++;
    }
    setTimeout(() => {    
        table.parentNode.removeChild(table);
    }, 960);
}, 1000);