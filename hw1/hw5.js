function GetMin (a, b) { //1
    return a<b ? a:b;
}

function parity(a) { //2
    return a%2 ===0 ? "Число четное" : " ЧИсло нечетное";
}

function ConsoleSquare (a) { //3.1
    console.log(Math.pow(a, 2));
}

function ReturnSquare (a) { //3.2
    return Math.pow(a, 2);
}

function GreetingUser() { //4
    let age = prompt('Сколько вам лет?');
    if (age<0) {
        alert('Вы ввели неправильное значение');
    } else if (age<13) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

function multiplication(a, b) { //5
    if (isNaN(a)||isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a*b;
    }
}

function GetCube (n) { //6
    let ret=n+' в кубе равняется '
    if (isNaN(n)) {
        return 'Введено некорректное значение';
    } else {
        n = Math.pow(n, 3);
        ret+=n;
        return ret;
    }
}

let circle1 = { //7
    radius: 15,
    getArea : function() {
        return Math.PI*this.radius*circle1.radius;
    },
    getPerimetr : function() {
        return Math.PI*circle1.radius*2;
    }
}

let circle2 = {
    radius: 10,
    getArea : function() {
        return Math.PI*circle2.radius*circle2.radius;
    },
    getPerimetr : function () {
        return Math.PI*circle2.radius*2;
    }
}

function Seasons () { //8

    let a=prompt('Введите номер месяца');
    if (isNaN(a) || a<1 || a>12) {
        alert ('Введено неверное значение');
    } else if (a==1 || a==2 || a==12) {
        alert ('Зима');
    } else if (a>2&&a<6) {
        alert ("Весна");
    } else if (a>5&&a<9) {
        alert ('Лето');
    } else {
        alert ('Осень');
    }
    return;
}
