//Создание массива из случайных чисел 0 или 1
var numberHeight = 15;//Высота поля
var numberWidth = 30;//Ширина поля
var arr = [];//Поле - двумерный массив
var arr1 = [];
var n = 0;
var m = 0;
var a, b, c, d, f, g, h, i, z;
while (n <= numberHeight) {
    arr1[n] = [];
        while (m <= numberWidth) {
                arr1[n][m] = 1;
                m++; 
        }
    m = 0;
    n++;
}
n = 0;
m = 0;
while (n <= numberHeight) {
    arr[n] = [];
        while (m <= numberWidth) {
            var cellState = Math.round(Math.random());
            if (cellState == 0) {
                arr[n][m] = cellState;
                m++;
            } else {
                arr[n][m] = cellState;                
                m++; 
            }
        }
    m = 0;
    n++;

}

setInterval(function() { 
//Вывод таблицы на экран
    n = 0;
    m = 0;
    var table = document.createElement('table');
    document.body.insertBefore(table, document.body.firstChild);
    while (n <= numberHeight) {
        var tr = document.createElement('tr');
        table.appendChild(tr);
            while (m <= numberWidth) {
                if (arr[n][m] === 0) {
                    var td = document.createElement('td');
                    td.setAttribute("class", "cellDead");  
                    tr.appendChild(td);
                    m++;
                } else {
                    var td = document.createElement('td');
                    td.setAttribute("class", "cellLife");  
                    tr.appendChild(td);                 
                    m++; 
                }
            }
        m = 0;
        n++;
    }
    //Удаление таблицы с экрана    
    setTimeout(() => {    
        table.parentNode.removeChild(table);
    }, 480);
    //Проверка массива
    n=0;
    m=0;
    //Берем новый массив, в него будем записывать результат вычислений
    while (n <= numberHeight) {
        while ( m <= numberWidth) {
            if (arr[n][m] == 1) {  //Если клетка живая
                if (n == 0 && m == 0) { //Левый верхний угол
                    f = arr[n][m + 1];
                    h = arr[n + 1][m];
                    i = arr[n + 1][m + 1];
                    z = f + h + i;
                    if (z > 3 || z < 2) {
                        arr1[n][m] = 0;
                        m++;
                    } else {
                        arr1[n][m] = 1;
                        m++;
                    }
                } else if (n == 0 && m > 0 && m < numberWidth) {  //Верхняя сторона
                    d = arr[n][m - 1];
                    f = arr[n][m + 1];
                    g = arr[n + 1][m - 1];
                    h = arr[n + 1][m];
                    i = arr[n + 1][m + 1];
                    z = d + f + g + h + i;
                    if (z > 3 || z < 2) {
                        arr1[n][m] = 0;
                        m++;
                    } else {
                        arr1[n][m] = 1;
                        m++;
                    }
                } else if (n == 0 && m == numberWidth) { //Правый верхний угол
                    d = arr[n][m - 1];
                    g = arr[n + 1][m - 1];
                    h = arr[n + 1][m];
                    z = d + g + h;
                    if (z > 3 || z < 2) {
                        arr1[n][m] = 0;
                        m++;
                    } else {
                        arr1[n][m] = 1;
                        m++;
                    }
                } else if (n > 0 && n < numberHeight && m == numberWidth) { //Правая сторона
                    a = arr[n - 1][m - 1];
                    b = arr[n - 1][m];
                    d = arr[n][m - 1];
                    g = arr[n + 1][m - 1];
                    h = arr[n + 1][m];
                    z = a + b + d + g + h;
                    if (z > 3 || z < 2) {
                        arr1[n][m] = 0;
                        m++;
                    } else {
                        arr1[n][m] = 1;
                        m++;
                    }
                } else if (n == numberHeight && m == numberWidth) { //Правый нижний угол
                    a = arr[n - 1][m - 1];
                    b = arr[n - 1][m];
                    d = arr[n][m - 1];
                    z = a + b + d;
                    if (z > 3 || z < 2) {
                        arr1[n][m] = 0;
                        m++;
                    } else {
                        arr1[n][m] = 1;
                        m++;
                    }
                } else if (n == numberHeight && m < numberWidth && m > 0) { //Нижняя сторона
                    a = arr[n - 1][m - 1];
                    b = arr[n - 1][m];
                    c = arr[n - 1][m + 1];
                    d = arr[n][m - 1];
                    f = arr[n][m + 1];
                    z = a + b + c + d + f;
                    if (z > 3 || z < 2) {
                        arr1[n][m] = 0;
                        m++;
                    } else {
                        arr1[n][m] = 1;
                        m++;
                    }
                } else if (n == numberHeight && m == 0) { //Левый нижний угол
                    b = arr[n - 1][m];
                    c = arr[n - 1][m + 1];
                    f = arr[n][m + 1];
                    z = b + c + f;
                    if (z > 3 || z < 2) {
                        arr1[n][m] = 0;
                        m++;
                    } else {
                        arr1[n][m] = 1;
                        m++;
                    }
                } else if (n < numberHeight && n > 0 && m == 0) { //Левая сторона
                    b = arr[n - 1][m];
                    c = arr[n - 1][m + 1];
                    f = arr[n][m + 1];
                    h = arr[n + 1][m];
                    i = arr[n + 1][m + 1];
                    z = b + c + f + h + i;
                    if (z > 3 || z < 2) {
                        arr1[n][m] = 0;
                        m++;
                    } else {
                        arr1[n][m] = 1;
                        m++;
                    }
                } else { //Средняя часть
                    a = arr[n - 1][m - 1];
                    b = arr[n - 1][m];
                    c = arr[n - 1][m + 1];
                    d = arr[n][m - 1];
                    f = arr[n][m + 1];
                    g = arr[n + 1][m - 1];
                    h = arr[n + 1][m];
                    i = arr[n + 1][m + 1];
                    z = a + b + c + d + f + g + h + i;
                    if (z > 3 || z < 2) {
                        arr1[n][m] = 0;
                        m++;
                    } else {
                        arr1[n][m] = 1;
                        m++;
                    }
                }

            } else if (arr[n][m] == 0) {  //Если клетка мертвая
                if (n == 0 && m == 0) { //Левый верхний угол
                    f = arr[n][m + 1];
                    h = arr[n + 1][m];
                    i = arr[n + 1][m + 1];
                    z = f + h + i;
                    if (z != 3) {
                        arr1[n][m] = 0;
                        m++;
                    } else {
                        arr1[n][m] = 1;
                        m++;
                    }
                } else if (n == 0 && m > 0 && m < numberWidth) {  //Верхняя сторона
                    d = arr[n][m - 1];
                    f = arr[n][m + 1];
                    g = arr[n + 1][m - 1];
                    h = arr[n + 1][m];
                    i = arr[n + 1][m + 1];
                    z = d + f + g + h + i;
                    if (z != 3) {
                        arr1[n][m] = 0;
                        m++;
                    } else {
                        arr1[n][m] = 1;
                        m++;
                    }
                } else if (n == 0 && m == numberWidth) { //Правый верхний угол
                    d = arr[n][m - 1];
                    g = arr[n + 1][m - 1];
                    h = arr[n + 1][m];
                    z = d + g + h;
                    if (z != 3) {
                        arr1[n][m] = 0;
                        m++;
                    } else {
                        arr1[n][m] = 1;
                        m++;
                    }
                } else if (n > 0 && n < numberHeight && m == numberWidth) { //Правая сторона
                    a = arr[n - 1][m - 1];
                    b = arr[n - 1][m];
                    d = arr[n][m - 1];
                    g = arr[n + 1][m - 1];
                    h = arr[n + 1][m];
                    z = a + b + d + g + h;
                    if (z != 3) {
                        arr1[n][m] = 0;
                        m++;
                    } else {
                        arr1[n][m] = 1;
                        m++;
                    }
                } else if (n == numberHeight && m == numberWidth) { //Правый нижний угол
                    a = arr[n - 1][m - 1];
                    b = arr[n - 1][m];
                    d = arr[n][m - 1];
                    z = a + b + d;
                    if (z != 3) {
                        arr1[n][m] = 0;
                        m++;
                    } else {
                        arr1[n][m] = 1;
                        m++;
                    }
                } else if (n == numberHeight && m < numberWidth && m > 0) { //Нижняя сторона
                    a = arr[n - 1][m - 1];
                    b = arr[n - 1][m];
                    c = arr[n - 1][m + 1];
                    d = arr[n][m - 1];
                    f = arr[n][m + 1];
                    z = a + b + c + d + f;
                    if (z != 3) {
                        arr1[n][m] = 0;
                        m++;
                    } else {
                        arr1[n][m] = 1;
                        m++;
                    }
                } else if (n == numberHeight && m == 0) { //Левый нижний угол
                    b = arr[n - 1][m];
                    c = arr[n - 1][m + 1];
                    f = arr[n][m + 1];
                    z = b + c + f;
                    if (z != 3) {
                        arr1[n][m] = 0;
                        m++;
                    } else {
                        arr1[n][m] = 1;
                        m++;
                    }
                } else if (n < numberHeight && n > 0 && m == 0) { //Левая сторона
                    b = arr[n - 1][m];
                    c = arr[n - 1][m + 1];
                    f = arr[n][m + 1];
                    h = arr[n + 1][m];
                    i = arr[n + 1][m + 1];
                    z = b + c + f + h + i;
                    if (z != 3) {
                        arr1[n][m] = 0;
                        m++;
                    } else {
                        arr1[n][m] = 1;
                        m++;
                    }
                } else { //Средняя часть
                    a = arr[n - 1][m - 1];
                    b = arr[n - 1][m];
                    c = arr[n - 1][m + 1];
                    d = arr[n][m - 1];
                    f = arr[n][m + 1];
                    g = arr[n + 1][m - 1];
                    h = arr[n + 1][m];
                    i = arr[n + 1][m + 1];
                    z = a + b + c + d + f + g + h + i;
                    if (z != 3) {
                        arr1[n][m] = 0;
                        m++;
                    } else {
                        arr1[n][m] = 1;
                        m++;
                    }
                }
            }
        }
        n++;
        m = 0;
    }
// Присваиваем старому массиву новый массив
    n = 0;
    m = 0;
    while (n <= numberHeight) {
        arr[n][m] = arr1[n][m];
        while (m <= numberWidth) {
            arr[n][m] = arr1[n][m];
            m++;
        }
        m = 0;
        n++;
    }
//Отправляем значения нового массива на экран
}, 500);