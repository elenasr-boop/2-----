let people = [ //1 задание
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort(function (a, b) {
    return a.age - b.age;
}));

function isPositive(a) { //2 задание
    if (a > 0) {
        return a;
    }
}

function isMale(a) {
    if (a.gender == 'male') {
        return a;
    }
}

function filter(arr, func) {
    let array = [];
    let count = 0;
    for (i=0; i < arr.length; i++) {
        
        if (func(arr[i])!=undefined) {
            array.push(func(arr[i]));
        }
    }
    return array;
}

console.log(filter([3, -4, 1, 9], isPositive));

people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));

// 3 задание 

// function ThirtySeconds() {
//     let date = new Date()
// 		console.log(date);

// 	let interval = setInterval(() => {
// 		let date = new Date()
// 		console.log(date);
// 	}, 3000);

//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('30 секунд прошло')
//       }, 30000)
// }

// ThirtySeconds();

// 4 задание 

// function delayForSecond(callback) {
//     let timeOut = setTimeout(callback, 1000)
// }

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// })

// 5 задание 

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	
                    cb(); 
                }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => {sayHi('Глеб')});