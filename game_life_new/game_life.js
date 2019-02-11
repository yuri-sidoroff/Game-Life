let x = 0, y = 0;
let numberHeight = 20 ,numberWidth = 30;
let arr = [], arr1 = [], arrZero = [];
let table, tr, td, h2, numberId, cellState;
let liveGame, arrCheck = 0, arrCheckAll = 0, arrCheckZero = 0, countDay = 0;
let a, b, c, d, f, g, h, i, z;


startTable();

setButton("buttonRandom", "RANDOM", "buttonRandom", goRandom);
setButton("buttonClear", "CLEAR", "buttonClear", clearGame);
setInput("selectHeight", "H", selectHeight);
setInput("selectWidth", "W", selectWidth);
setButton("buttonStart", "START", "buttonStart", startGame);
setButton("buttonStop", "STOP", "buttonStop", stopGame);

setH2();
function startTable () {
table = document.createElement('table');
document.body.insertBefore(table, document.body.firstChild);
numberId = 1;
while (x <= numberHeight) {
    arr[x] = [];
    arr1[x] = [];
    tr = document.createElement('tr');
    table.appendChild(tr);
    while (y <= numberWidth) {
        arr[x][y] = 0;
        arr1[x][y] = 0;
        td = document.createElement('td');
        td.setAttribute("style", "background-color:white;height:10px;width:10px;border: 1px solid lightgrey"); 
        td.id = numberId; 
        td.addEventListener("click", selectStateCell);
        tr.appendChild(td);
        y++;
        numberId++;
    }
    y = 0;
    x++;
}
x = 0;
}
//Функция отображения жизни клеток
function setH2() {
    h2 = document.createElement('h2');
    h2.id = "countDays";
    h2.innerHTML = "Cells lived - 0 days";
    document.body.insertBefore(h2, document.body.firstChild);
}
//Функция для отображения кнопок
function setButton(btn, btnName, btnid, btnFunc) {
    btn = document.createElement('button');
    btn.innerHTML = btnName;
    btn.id = btnid;
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
countDay = 0;
arrCheckAll = 0;
liveGame = 0;
numberId = 1;
while (x <= numberHeight) {
        while (y <= numberWidth) {
            cellState = Math.round(Math.random());
            if (cellState == 0) {
                arr[x][y] = cellState;
                document.getElementById(numberId).setAttribute("style", "background-color:white;height:10px;width:10px;border: 1px solid lightgrey");  
                y++;
                numberId++;
            } else {
                arr[x][y] = cellState;
                document.getElementById(numberId).setAttribute("style", "background-color:red;height:10px;width:10px;border: 1px solid lightgrey");              
                y++; 
                numberId++;
            }
        arr1[x][y] = 0;
        }
    y = 0;
    x++;
    }
x = 0;  
}

//Функция установки высоты
function selectHeight() {
    liveGame = 0;
    if (isNaN(+this.value)) {
        this.value = 5;
    }
    numberHeight = +this.value;
    table.parentNode.removeChild(table);
    h2.parentNode.removeChild(h2);
    startTable();
    setH2()
}

//Функция установки ширины
function selectWidth() {
    liveGame = 0;
    if (isNaN(+this.value)) {
        this.value = 5;
    }
    numberWidth = +this.value;
    table.parentNode.removeChild(table);
    h2.parentNode.removeChild(h2);
    startTable();
    setH2()
}

//Функция остановки игры
function stopGame() {
    liveGame = 0;
}

//Функция очистки поля
function clearGame() {
    countDay = 0;
    arrCheckAll = 0;
    liveGame = 0;
    table.parentNode.removeChild(table);
    h2.parentNode.removeChild(h2);
    startTable();
    setH2()
    while (x <= numberHeight) {
        while (y <= numberWidth) {
            arr[x][y] = 0;
            arr1[x][y] = 0;
            y++;
        }
        y = 0;
        x++;
    }
    x = 0;
}

//Функция выбора состояния клетки
function selectStateCell() {
    let x = Math.ceil(+this.id / (numberWidth + 1)) - 1;
    let y = (+this.id % (numberWidth + 1)) - 1;
    if (y == -1) y = numberWidth;
    if (x == -1) x = numberHeight;
    if (arr[x][y] == 0){
        this.setAttribute("style", "background-color:red;height:10px;width:10px;border: 1px solid lightgrey");
        arr[x][y] = 1;
    } else {
        this.setAttribute("style", "background-color:white;height:10px;width:10px;border: 1px solid lightgrey");
        arr[x][y] = 0;
    }
    x = 0;
    y = 0;
}

//Функция старта игры
function startGame() {
    liveGame = 1;
    let game = setInterval(function() { 
        if (liveGame == 1) {
            //Проверка массива
            //Берем новый массив, в него будем записывать результат вычислений
            while (x <= numberHeight) {
                while (y <= numberWidth) {
                    let z = 0;
                    if (arr[x][y] == 1) {  //Если клетка живая
                        if (x == 0 && y == 0) { //Левый верхний угол
                            f = arr[x][y + 1];
                            h = arr[x + 1][y];
                            i = arr[x + 1][y + 1];
                            z = f + h + i;
                            if (z > 3 || z < 2) {
                                arr1[x][y] = 0;
                                y++;
                            } else {
                                arr1[x][y] = 1;
                                y++;
                            }
                        } else if (x == 0 && y > 0 && y < numberWidth) {  //Верхняя сторона
                            d = arr[x][y - 1];
                            f = arr[x][y + 1];
                            g = arr[x + 1][y - 1];
                            h = arr[x + 1][y];
                            i = arr[x + 1][y + 1];
                            z = d + f + g + h + i;
                            if (z > 3 || z < 2) {
                                arr1[x][y] = 0;
                                y++;
                            } else {
                                arr1[x][y] = 1;
                                y++;
                            }
                        } else if (x == 0 && y == numberWidth) { //Правый верхний угол
                            d = arr[x][y - 1];
                            g = arr[x + 1][y - 1];
                            h = arr[x + 1][y];
                            z = d + g + h;
                            if (z > 3 || z < 2) {
                                arr1[x][y] = 0;
                                y++;
                            } else {
                                arr1[x][y] = 1;
                                y++;
                            }
                        } else if (x > 0 && x < numberHeight && y == numberWidth) { //Правая сторона
                            a = arr[x - 1][y - 1];
                            b = arr[x - 1][y];
                            d = arr[x][y - 1];
                            g = arr[x + 1][y - 1];
                            h = arr[x + 1][y];
                            z = a + b + d + g + h;
                            if (z > 3 || z < 2) {
                                arr1[x][y] = 0;
                                y++;
                            } else {
                                arr1[x][y] = 1;
                                y++;
                            }
                        } else if (x == numberHeight && y == numberWidth) { //Правый нижний угол
                            a = arr[x - 1][y - 1];
                            b = arr[x - 1][y];
                            d = arr[x][y - 1];
                            z = a + b + d;
                            if (z > 3 || z < 2) {
                                arr1[x][y] = 0;
                                y++;
                            } else {
                                arr1[x][y] = 1;
                                y++;
                            }
                        } else if (x == numberHeight && y < numberWidth && y > 0) { //Нижняя сторона
                            a = arr[x - 1][y - 1];
                            b = arr[x - 1][y];
                            c = arr[x - 1][y + 1];
                            d = arr[x][y - 1];
                            f = arr[x][y + 1];
                            z = a + b + c + d + f;
                            if (z > 3 || z < 2) {
                                arr1[x][y] = 0;
                                y++;
                            } else {
                                arr1[x][y] = 1;
                                y++;
                            }
                        } else if (x == numberHeight && y == 0) { //Левый нижний угол
                            b = arr[x - 1][y];
                            c = arr[x - 1][y + 1];
                            f = arr[x][y + 1];
                            z = b + c + f;
                            if (z > 3 || z < 2) {
                                arr1[x][y] = 0;
                                y++;
                            } else {
                                arr1[x][y] = 1;
                                y++;
                            }
                        } else if (x < numberHeight && x > 0 && y == 0) { //Левая сторона
                            b = arr[x - 1][y];
                            c = arr[x - 1][y + 1];
                            f = arr[x][y + 1];
                            h = arr[x + 1][y];
                            i = arr[x + 1][y + 1];
                            z = b + c + f + h + i;
                            if (z > 3 || z < 2) {
                                arr1[x][y] = 0;
                                y++;
                            } else {
                                arr1[x][y] = 1;
                                y++;
                            }
                        } else { //Средняя часть
                            a = arr[x - 1][y - 1];
                            b = arr[x - 1][y];
                            c = arr[x - 1][y + 1];
                            d = arr[x][y - 1];
                            f = arr[x][y + 1];
                            g = arr[x + 1][y - 1];
                            h = arr[x + 1][y];
                            i = arr[x + 1][y + 1];
                            z = a + b + c + d + f + g + h + i;
                            if (z > 3 || z < 2) {
                                arr1[x][y] = 0;
                                y++;
                            } else {
                                arr1[x][y] = 1;
                                y++;
                            }
                        }
                    } else if (arr[x][y] == 0) {  //Если клетка мертвая
                        if (x == 0 && y == 0) { //Левый верхний угол
                            f = arr[x][y + 1];
                            h = arr[x + 1][y];
                            i = arr[x + 1][y + 1];
                            z = f + h + i;
                            if (z != 3) {
                                arr1[x][y] = 0;
                                y++;
                            } else {
                                arr1[x][y] = 1;
                                y++;
                            }
                        } else if (x == 0 && y > 0 && y < numberWidth) {  //Верхняя сторона
                            d = arr[x][y - 1];
                            f = arr[x][y + 1];
                            g = arr[x + 1][y - 1];
                            h = arr[x + 1][y];
                            i = arr[x + 1][y + 1];
                            z = d + f + g + h + i;
                            if (z != 3) {
                                arr1[x][y] = 0;
                                y++;
                            } else {
                                arr1[x][y] = 1;
                                y++;
                            }
                        } else if (x == 0 && y == numberWidth) { //Правый верхний угол
                            d = arr[x][y - 1];
                            g = arr[x + 1][y - 1];
                            h = arr[x + 1][y];
                            z = d + g + h;
                            if (z != 3) {
                                arr1[x][y] = 0;
                                y++;
                            } else {
                                arr1[x][y] = 1;
                                y++;
                            }
                        } else if (x > 0 && x < numberHeight && y == numberWidth) { //Правая сторона
                            a = arr[x - 1][y - 1];
                            b = arr[x - 1][y];
                            d = arr[x][y - 1];
                            g = arr[x + 1][y - 1];
                            h = arr[x + 1][y];
                            z = a + b + d + g + h;
                            if (z != 3) {
                                arr1[x][y] = 0;
                                y++;
                            } else {
                                arr1[x][y] = 1;
                                y++;
                            }
                        } else if (x == numberHeight && y == numberWidth) { //Правый нижний угол
                            a = arr[x - 1][y - 1];
                            b = arr[x - 1][y];
                            d = arr[x][y - 1];
                            z = a + b + d;
                            if (z != 3) {
                                arr1[x][y] = 0;
                                y++;
                            } else {
                                arr1[x][y] = 1;
                                y++;
                            }
                        } else if (x == numberHeight && y < numberWidth && y > 0) { //Нижняя сторона
                            a = arr[x - 1][y - 1];
                            b = arr[x - 1][y];
                            c = arr[x - 1][y + 1];
                            d = arr[x][y - 1];
                            f = arr[x][y + 1];
                            z = a + b + c + d + f;
                            if (z != 3) {
                                arr1[x][y] = 0;
                                y++;
                            } else {
                                arr1[x][y] = 1;
                                y++;
                            }
                        } else if (x == numberHeight && y == 0) { //Левый нижний угол
                            b = arr[x - 1][y];
                            c = arr[x - 1][y + 1];
                            f = arr[x][y + 1];
                            z = b + c + f;
                            if (z != 3) {
                                arr1[x][y] = 0;
                                y++;
                            } else {
                                arr1[x][y] = 1;
                                y++;
                            }
                        } else if (x < numberHeight && x > 0 && y == 0) { //Левая сторона
                            b = arr[x - 1][y];
                            c = arr[x - 1][y + 1];
                            f = arr[x][y + 1];
                            h = arr[x + 1][y];
                            i = arr[x + 1][y + 1];
                            z = b + c + f + h + i;
                            if (z != 3) {
                                arr1[x][y] = 0;
                                y++;
                            } else {
                                arr1[x][y] = 1;
                                y++;
                            }
                        } else { //Средняя часть
                            a = arr[x - 1][y - 1];
                            b = arr[x - 1][y];
                            c = arr[x - 1][y + 1];
                            d = arr[x][y - 1];
                            f = arr[x][y + 1];
                            g = arr[x + 1][y - 1];
                            h = arr[x + 1][y];
                            i = arr[x + 1][y + 1];
                            z = a + b + c + d + f + g + h + i;
                            if (z != 3) {
                                arr1[x][y] = 0;
                                y++;
                            } else {
                                arr1[x][y] = 1;
                                y++;
                            }
                        }
                    }
                }
                x++;
                y = 0;
            }
            x = 0;
            //Вывод на экран результатов вычислений
            numberId = 1;
            while (x <= numberHeight) {
                    while (y <= numberWidth) {
                        if (arr1[x][y] == 0) {
                            document.getElementById(numberId).setAttribute("style", "background-color:white;height:10px;width:10px;border: 1px solid lightgrey");  
                            y++;
                            numberId++;
                        } else {
                            document.getElementById(numberId).setAttribute("style", "background-color:red;height:10px;width:10px;border: 1px solid lightgrey");              
                            y++; 
                            numberId++;
                        }
                    }
                y = 0;
                x++;
            }
            x = 0;

            //Проверяем массив на пустое поле

            while (x <= numberHeight) {
                while (y <= numberWidth) {
                    if (arr[x][y] == 0) {
                        arrCheck++;
                    }
                    y++;
                }
                y = 0;
                x++;
            }
            x = 0;
            document.getElementById("countDays").innerHTML = "Cells lived - " + countDay + " days";
            if (arrCheck == (numberHeight+1)*(numberWidth+1)) {
                liveGame = 0;
                document.getElementById("countDays").innerHTML = "Game over. Cells lived - " + countDay + " days";
            }
            arrCheck = 0;

            // Присваиваем старому массиву новый массив
            while (x <= numberHeight) {
                while (y <= numberWidth) {
                    arr[x][y] = arr1[x][y];
                    y++;
                }
                y = 0;
                x++;
            }
            x = 0;

            countDay++;
        } else {
        clearInterval (game)
        }
    }, 200);
}