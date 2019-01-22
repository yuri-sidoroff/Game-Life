function guessTheNumber () {
    var userName = prompt ( "Как вас зовут?", "" );
    if (userName === null) {
        alert( "До свидания" );
    } else {
        while ( userName === "" ) {
            userName = prompt ( "Вы не ввели имя.\nПопробуйте еще раз: ", "" );
        }

        var rules = "\nПравила игры:\nРобот загадывает число от 1 до 100.\nВы отвечаете какое число он загадал,\nа робот отвечает, его число больше или меньше вашего";
        var rulesMessage = confirm ( "Здравствуйте, " + userName + rules );
        
        while (rulesMessage === false) {
            rulesMessage = confirm ( "Прочитайте еще раз" + rules );
        }
        var robotNumber = +(Math.random()*100).toFixed(0) + 1;
        var userNumber = +prompt ( "Робот загадал число.\nПопробуйте угадать его:", "" );
        
        checkErrorUserNumber();
        
        var i = 1;

        while (userNumber !== robotNumber) {
            if (robotNumber > userNumber) {
                userNumber = +prompt ( "Больше\nВведите число больше чем " + userNumber, "" );
                checkErrorUserNumber();
                i++;
            } else {
                userNumber = +prompt ( "Меньше\nВведите число меньше чем " + userNumber, "" );
                checkErrorUserNumber();
                i++;
            }
        }

        var messageWin = confirm ( "Поздравляем, " + userName + "\nВы угадали число: " + robotNumber + " c " + i + " попытки!\nЖелаете попробовать еще раз?");
        
        if (messageWin) {
            return guessTheNumber();
        } else {
            alert ( "Спасибо за игру, " + userName + "\nПриходите к нам еще!" );
        }
    }

    function checkErrorUserNumber() {
        while ( isNaN(userNumber) || userNumber === 0 ) {
            userNumber = +prompt ( "Ошибка при вводе числа!\nПопробуйте еще раз:", "" );
        }
    }
}
guessTheNumber ();
