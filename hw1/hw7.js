let str='js'; //1
console.log(str.toUpperCase());

function searchStart(arr, str) { //2
    let searchArray = [];

    for (let i=0; i< arr.length; i++) {
        if (arr[i].toLowerCase().startsWith(str.toLowerCase())) {
            searchArray.push(arr[i].toLowerCase());
        }
    }

    return searchArray;
}

console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

let num=32.58884; //3
console.log(Math.floor(num), Math.ceil(num), Math.round(num));

let array=[52, 53, 49, 77, 21, 32]; //4
let min=Math.min(...array);  
let max=Math.max(...array);

console.log(min, max);

function randomNumber() { //5
    let number = Math.floor(Math.random() * 10+1);
    return number;
}

console.log(randomNumber());

function getRandomArrNumbers(numb) { //6
    let arr=[];
    for (let i=0; i<Math.floor(numb/2); i++) {
        arr.push(Math.round(Math.random
            ()*numb));
    }
    
    return arr;
}

console.log(getRandomArrNumbers(12));

function getRandomNumberInRange(a, b) { //7
    let min=0;
    let max=0;

    if (a>b) {
        min=b;
        max=a;
    } else if (b>a) {
        min=a;
        max=b;
    } else {
        return 'Введены одинаковые числа';
    }
    return Math.round(Math.random()*(max-min)+min)
}

console.log(getRandomNumberInRange(3, 12));

let currentDate = new Date();
console.log(currentDate); //8

let searchDate = +currentDate + 73*24*60*60*1000; //9 первое решение
let days73 = new Date(searchDate);
console.log(days73);

days73 = new Date(currentDate.setDate(currentDate.getDate()+73)); //9 второе решение
console.log(days73);

function dateInWords(myDate) { //10
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    let hours='';
    let minutes='';
    let seconds='';

    if (myDate.getHours()<10) {
        hours = hours + 0 + myDate.getHours();
    } else {
        hours = myDate.getHours();
    }

    if (myDate.getMinutes()<10) {
        minutes = minutes + 0 + myDate.getMinutes();
    } else {
        minutes = myDate.getMinutes();
    }

    if (myDate.getSeconds()<10) {
        seconds = seconds + 0 + myDate.getSeconds();
    } else {
        seconds = myDate.getSeconds();
    }

    let fullDate = 'Дата: '+ myDate.getDate() + ' ' + months[myDate.getMonth()] + ' ' + myDate.getFullYear() + ' - это ' + days[myDate.getDay()] + '\nВремя: ' + hours + ':' + minutes + ':' + seconds;

    return fullDate;
}

let searchDat = new Date();

console.log(dateInWords(searchDat));