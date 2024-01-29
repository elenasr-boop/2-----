function Seasons () {

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

function rememberWords() {
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arr = arr.sort(() => Math.random() - 0.5);

    alert(arr.join(', '));

    let first = prompt('Чему равнялся первый элемент массива?');
    let last = prompt('Чему равнялся последний элемент массива?');

    if (first==null || last==null) {
        return;
    } else if ((first.toLowerCase()==arr[0].toLowerCase()) && (last.toLowerCase()==arr[6].toLowerCase())) {
        alert('Поздравляю, вы выиграли!');
    } else if ((first.toLowerCase()==arr[0].toLowerCase()) || (last.toLowerCase()==arr[6].toLowerCase())) {
        alert('Вы были близки к победе!');
    } else {
        alert('К сожалению, вы не угадали, попробуйте еще раз');
    }
}