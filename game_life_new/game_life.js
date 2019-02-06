let x = 0, y = 0;
let numberHeight = 20 ,numberWidth = 30;
let arr = [], arr1 = [];
let table, tr, td, numberId, cellState;
let liveGame;

startTable();
setButton("buttonRandom", "RANDOM", "buttonRandom", goRandom);
setButton("buttonClear", "CLEAR", "buttonClear", clearGame);
setInput("inputHeight", "H", inputHeight);
setInput("inputWidth", "W", inputWidth);
setButton("buttonStart", "START", "buttonStart");
setButton("buttonStop", "STOP", "buttonStop", stopGame);

function startTable () {
table = document.createElement('table');
document.body.insertBefore(table, document.body.firstChild);
numberId = 1;
while (x <= numberHeight) {
    tr = document.createElement('tr');
    table.appendChild(tr);
    while (y <= numberWidth) {
        td = document.createElement('td');
        td.setAttribute("style", "background-color:white;height:10px;width:10px;border: 1px solid white"); 
        td.id = numberId; 
        tr.appendChild(td);
        y++;
        numberId++;
    }
    y = 0;
    x++;
}
x = 0;
numberId = "";
}
//Функция для отображения кнопок
function setButton(btn, btnName, btnid, btnFunc) {
    btn = document.createElement('button');
    btn.innerHTML = btnName;
    btn.id = btnid;
    btn.className = "start";
    btn.addEventListener("click", btnFunc);
    document.body.insertBefore(btn, document.body.nextSibling);
}
//Функция для отображения полей ввода размеров
function setInput(inp, inpPlaceholder, inpFunc) {
    inp = document.createElement('input');
    inp.maxLength = "2";
    inp.placeholder = inpPlaceholder;
    inp.addEventListener("input", inpFunc);
    document.body.insertBefore(inp, document.body.nextSibling); 
}
//Функция случайного отображения клеток для кнопки RANDOM
function goRandom() {
numberId = 1;
while (x <= numberHeight) {
    arr[x] = [];
    arr1[x] = [];
        while (y <= numberWidth) {
            cellState = Math.round(Math.random());
            if (cellState == 0) {
                arr[x][y] = cellState;
                document.getElementById(numberId).setAttribute("style", "background-color:white;height:10px;width:10px;border: 1px solid white");  
                y++;
                numberId++;
            } else {
                arr[x][y] = cellState;
                document.getElementById(numberId).setAttribute("style", "background-color:red;height:10px;width:10px;border: 1px solid white");              
                y++; 
                numberId++;
            }
        arr1[x][y] = 1;
        }
    y = 0;
    x++;
    }
x = 0;   
}

//Функция установки высоты
function inputHeight() {
    numberHeight = this.value;
    table.parentNode.removeChild(table);
    startTable();
}

//Функция установки ширины
function inputWidth() {
    numberWidth = this.value;
    table.parentNode.removeChild(table);
    startTable();
}

//Функция остановки игры
function stopGame() {
    liveGame = 0;
}

function clearGame() {
    liveGame = 0;
    table.parentNode.removeChild(table);
    startTable();
}

