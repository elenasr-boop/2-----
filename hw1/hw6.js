let arr = [1, 5, 4, 10, 0, 3]; //1 
for (i=0; i<arr.length; i++) {
    console.log(arr[i]);
    if (arr[i]==10) break;
}

console.log(arr.indexOf(4)); //2

let array = [1, 3, 5, 10, 20]; //3
console.log(array.join(' '));
 
let a = []; //4
for (let i = 0; i < 3; i++) {
	a[i] = []; 

	for (let j = 0; j < 3; j++) {
		a[i].push(1); 
	}
}

let b = [1, 1, 1]; //5
console.log(b.concat([2, 2, 2]));

let c = [9, 8, 7, 'a', 6, 5]; //6
let d = c.sort();
console.log(d.slice(0, d.length - 1));

// let g = [9, 8, 7, 6, 5]; //7
// // let hypothesis = prompt('Попробуйте угадать число'); 

// if (g.indexOf(Number(hypothesis)) == -1) {
//     console.log('Не угадал')
// }
// else {
//     console.log('Угадал');
// }

let string = 'abcdef'; //8
let f = Array.from(string);
let e = f.reverse();
let reversedString = ''; 

for (let i=0; i<e.length; i++){
    reversedString+=e[i];
}

console.log(reversedString);

let h = [[1, 2, 3,],[4, 5, 6]]; //9
let k = [];

for (let i=0; i<2; i++) {
    for (let j=0; j<3; j++) {
        k.push(h[i][j]);
    }
}

console.log(k);

let l = []; //10
for (let i=0; i<10; i++) {
    l.push(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
}

console.log(l);

for (let i=0; i<9; i++) {
    console.log(l[i]+l[i+1]);
}

function arraySqware(initalArray) { //11
    let arrSqware = [];
    for (let i=0; i<initalArray.length; i++){
        arrSqware.push(Math.pow(initalArray[i], 2));
    }
    return arrSqware;
}

function wordLength(initalArray) { //12
    let arrLength = [];
    for (let i=0; i<initalArray.length; i++) {
        arrLength.push(initalArray[i].length);
    }
    return arrLength;
}

function filterPositive(array) { //13
    let arrNegative = [];
    for (let i=0; i<array.length; i++) {
        if (array[i]<0) {
            arrNegative.push(array[i]);
        }
    }
    return arrNegative;
}



console.log(arraySqware(l));
console.log(wordLength(['слово', '', 'слог', 'длинное предложение', 'буква']));
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));

let randomArray = []; //14
for (let i=0; i<10; i++) {
    randomArray.push(Math.floor(Math.random() * 11));
}
console.log(randomArray);

let evenNumbers = []; 
for (let i=0; i<randomArray.length; i++){
    if (randomArray[i]%2 == 0) {
        evenNumbers.push(randomArray[i])
    }
}

console.log(evenNumbers);

randomArray=[]; //15
let sum = 0;

for (let i=0; i<6; i++) {
    randomArray.push(Math.floor(Math.random() * 10+1));
    sum+=randomArray[i];
}
console.log(randomArray);
console.log(sum/randomArray.length);