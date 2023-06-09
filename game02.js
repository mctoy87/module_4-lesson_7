'use strict';

// Усовершенствуйте игру, которую написали в game01

let min = prompt("Введи число, которое будет начальным в диапазоне случайных чисел", '');
let max = prompt("Введи число, которое будет конечным в диапазоне случайных чисел", '');
//бот предлагает ввести два числа, и загадывает случайное число в этом диапазоне
const random = Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min); //генерирует случайное число от min до max(включительно)

let userNumb;
let count = 0;
let arr = [];  //массив для введенных пользователем чисел

    while (Number(userNumb) !== random) {

    userNumb = prompt("Попробуй угадать число от 0 до 100", '');// предлагает пользователю ввести свой вариант отгадки;

    count += 1;
    console.log (count);

    if (count > ((max-min) * 0.3)) {  //бот отграничивает количество попыток до 30% от количества цифр в диапазоне
        alert('Игра окончена!');         //если попытки закончились игра прекращается
        break;
    }
    else {
        if (isNaN(userNumb) || userNumb === '') {   // если пользователь ввел не число, то выводит “Введи число!”;
            alert("Введи число!", '');
            console.log("Ошибка");
            count--;     //попытка счетчиком не зачитывается;
        }
        else if (userNumb === null) {     // если пользователь нажимает “Отмена”, то игра заканчивается.
            alert('Игра окончена!');         
            break;
        }
        else {
            if (arr.find((item) => item === userNumb)) { //если пользователь повторно ввел число, которое вводил ранее, то бот выводит "Это число вы уже вводили" попытка не засчитывается
                alert('Это число вы уже вводили!');
                count -= 1;     //попытка счетчиком не зачитывается;
            }
            else {
                if (userNumb > random) {   // если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
                    arr.push(userNumb);  //бот запоминает каждое число которое ввел пользователь и записывает в массив
                    alert("Меньше!", '');
                }
                else if (userNumb < random) {   // если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
                    arr.push(userNumb);  //бот запоминает каждое число которое ввел пользователь и записывает в массив
                    alert("Больше!", '');
                }
                else { // если пользователь вводит правильное число, то бот выводит “Правильно!”;
                    userNumb = random;
                    alert("Правильно!");
                }
            }
        }
    }
}