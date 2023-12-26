for (i=1; i<3; i++) {
    console.log('Привет!'+'\n');
}

for (i=1; i<6; i++) {
    console.log(i+'\n');
} 

for (i=7; i<23; i++) {
    console.log(i+'\n');
}

let obj=  {
    'Коля':'200',
    'Вася':'300',
    'Петя':'400'
}

for (var name in obj) {
    console.log(`${name} — зарплата ${obj[name]} долларов.\n`);
}

let n=1000;
num=0;

do {
    n/=2;
    num++;
} while (n>=50);
console.log(n+' '+num);

let firstFriday=4;
for (day=firstFriday;day<32;day+=7) {
    console.log('Сегодня пятница, '+day+'-е число. Необходимо подготовить отчет.\n');
}