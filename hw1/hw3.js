let password = 'f'; //1 задание
// prompt('Ведите пароль')==password ? alert('Пароль введен верно'): alert('Пароль введен неверно');

let c=2; //2 задание
// (c>0)&&(c<10) ? console.log('Верно'):console.log('Неверно');

let d= 23; let e= 45; //3 задание
// (d>100)||(e>100) ? console.log("Верно"):console.log("Неверно");

let a = '2'; //4 задание
let b = '3';
console.log(Number(a)+Number(b));

let monthNumber=prompt("Какой номер месяца?"); //5 задание
switch(monthNumber) {
    case '1':
    console.log('Зима');
    break;
    case '2':
    console.log('Зима');
    break;
    case '3':
    console.log('Весна');
    break;
    case '4':
    console.log('Весна');
    break;
    case '5':
    console.log('Весна');
    break;
    case '6':
    console.log('Лето');
    break;
    case '7':
    console.log('Лето');
    break;
    case '8':
    console.log('Лето');
    break;
    case '9':
    console.log('Осень');
    break;
    case '10':
    console.log('Осень');
    break;
    case '11':
    console.log('Осень');
    break;
    case '12':
    console.log('Зима');
    break;
    default:
    console.log('Такого месяца не существует');
    break;
}

let num=prompt('Пожалуйста, введите любое число'); //7 задание
if (isNaN(num)) {
    console.log('Вы ввели не число');
} else if (num%2 == 1) {
    console.log('Число нечетное');
} else {
    console.log('Число четное');
}



let isMobile=window.innerWidth < 768;
let os=navigator.platform; 
if (os[0]==='i') {
    clientOs=0;
} else if (os='Android'){
    clientOs=1;
}
let clientDeviceYear=2015;
let clientYear=prompt('Введите год выпуска смартфона');
if (clientOs) {
    if (Number(clientYear)>clientDeviceYear) {
        console.log('Установите версию приложения для Android по ссылке');
    } else {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    }
} else {
    if (Number(clientYear)>clientDeviceYear) {
        console.log('Установите версию приложения для iOS по ссылке');
    } else {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    }
}