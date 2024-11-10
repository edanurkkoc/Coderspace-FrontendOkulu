console.log("Merhaba JS")

//Değişkenler

var a = 10;
var b = 3.14;
var c = "Javascript";

console.log(a);
console.log(typeof a); //türünü öğrenmek için

var firstNumber = 10;
var secondNumber = "20";
var result = firstNumber + secondNumber; //string
console.log(typeof result);

var result = firstNumber - secondNumber; //number
console.log(typeof result);


var ucuncuNumber;
console.log(ucuncuNumber);
firstNumber = 20;
deneme();

function deneme() {
    console.log("a fonksiyonu")
    return 0;
}

console.log(deneme())


// BOOLEAN (True/False)

var d = true;
console.log(typeof d);

var e = false;
console.log(typeof e);

// UNDEFİNED
var userName;
console.log(typeof userName);

// NULL

var isNull = null;
console.log(isNull)

// NULL PRİMİTİVE MİDİR?

console.log(typeof null) //object döner, bu bir hatadır


// OBJECT

var person = {
    name: "John Doe",
    age: 30,
    city: "New York"
}

console.log(typeof person);
console.log(person.name);

// ARRAY - DİZİ

var fruits = ["elma", "armut", "muz"];
console.log(fruits);
console.log(typeof fruits);
console.log(fruits[0])
console.log(fruits[fruits.length - 1])

// FUNCTİON

function hello() {
    console.log("Merhaba");
}
hello();
console.log(hello);
console.log(typeof hello)

// Date-Tarih
var date = new Date();
console.log(date);
console.log(typeof date);


var a = 10;
var b = a;
console.log("1 -", a, b)
a = 20;
console.log("2-", a, b)


var a = [10];
var b = a;
console.log("1 -", a, b) //[10] [10]
a = [20];
console.log("2-", a, b)  //[20] [10]
console.log("2-", a * b)  //200

var a = [10, 20, 30, 40, 50]
var b = a;
console.log("1-", a, b)
a[0] = 60;
console.log("2-", a, b)

// scope-kapsam  (global ve function scope)

var a = 10;
function scope() {
    var b = 20;
    console.log(a, b)
}
scope();

if (true) {
    var c = 30;  //block scope
    b = 40;
}

{
    let d = 40; //block scope
}

console.log(a, b, c, d);

// TİP DÖNÜŞÜMLERİ

var a = 5;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a)

var a = "deneme";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a)  //Nun oluyor

var a = 5 + "2";
console.log(a, typeof a)

var a = 5 - "2";
console.log(a, typeof a)

// Operatörler

const f = "deneme";
// f=1;
console.log(f, typeof f)

// TEMPLATE LİTERALS
let firstName = "Eda";
let lastName = "Kocakoç";
let age = "23";
let department = "BT";

value = `İsim:${firstName}
Soyisim:${lastName}
Yaş:${age}
Depertman:${department}`;

console.log(value)

// ARRAY METHODS 
const langs = ["Python", "Java", "C++", "Javascript"];
const numbers = [1, 2, 3, 4, 5];

value = numbers.length;
value = numbers[0];
value = numbers[numbers.lenght - 1]; //son eleman
value = numbers.indexOf(12);
value = numbers.includes(12);
value = numbers.push(12);
value = numbers.unshift(12);
value = numbers.pop(12);
value = numbers.shift(12);
value = numbers.reverse(12);
value = numbers.sort(function (a, b) { return a - b; });

console.log(numbers);
console.log(value);


// OBJECT METHODS

const person2 = {
    name: "John Doe",
    age: 30,
    adres: {
        city: "New York",
        contry: "Türkiye"
    },
    langs:["python","java","javascript"],
    work:function(){
        console.log("İş yapıyor");
    }

}

value=person2;
value=person2.fullName;

// KARŞILAŞTIRMA OPERATORLERİ

a=10;
b=20;
c="10";
d=10;

value=a==c; //değerler eşit mi
console.log(value);
value=a===c;
console.log(value); //hem değer hem de tür eşit mi
// denk değildir  !==
//eşit değildir !=
//OR ||
//AND &


// const lang=["python","java","dijango","go","R"]
// for (let index=0; index<lang.length; index++){

//     console.log(lang[index]);
// }

// MAP DÖNGÜSÜ
langs.map(function(lang,index){
    console.log(index, lang);
})