// function sum(a: number, b: number): number {
//     return a + b;
//   }
//   console.log(sum(10, 5));
// type Person = {
//     name: string;
// }
// type Employee = {
//     id: number;
// }
// type Manager = Person & Employee;
// const manager: Manager = {
//     name: 'Alex',
//     id: 1
// }
// console.log(manager);
// function identity<T>(value: T): T {
//     return value;
// }
// console.log(identity(34));
// class Box<T> {
//     private content: T;
//     constructor(content: T) {
//         this.content = content;
//     }
//     getContent(): T {
//         return this.content;
//     }
// };
// const box1 = new Box<string>('box number one');
// const box2 = new Box<number>(2);
// console.log(box1);
// console.log(box2);
// console.log(box1.getContent());
// console.log(box2.getContent());
// function greet(name: string) {
//     return `Привет, ${name}!`;
// }
// console.log(greet('2'));
// // console.log(greet(123)); // Ошибка: TS скажет, что нужен string
// const isFirstLetterBig = (text: string): string => {
//     if (text === '') {
//         return '';
//     }
//     if (text[0] === text[0].toUpperCase()) {
//         return text;
//     } else {
//         return `${text[0].toUpperCase()}${text.slice(1)}`
//     }
// }
// console.log(isFirstLetterBig('name'));
// const isJob = (job: string): string => {
//     if (job === 'processing') {
//         return 'Делаем раз'
//     } else if (job === 'paid') {
//         return 'Делаем два'
//     } else if (job === 'new') {
//         return 'Делаем три'
//     } else {
//         return 'Делаем четыре'
//     }
// }
// console.log(isJob('new'));
// const jobH = (job: string): string => {
//     switch (job) {
//         case 'processing': // status === 'processing' (строгое соответствие)
//             return 'Делаем раз'
//         case 'paid': // status === 'paid'
//             return 'Делаем два'
//         case 'new': // status === 'new'
//             return 'Делаем три'
//         default: // else
//             return 'Делаем четыре'
//     }
// }
// console.log(jobH('new'));
// const printNumbers = (initialNumber: number): void => {
//     let lastCount = 1;
//     while (initialNumber >= lastCount) {
//         console.log(initialNumber)
//         initialNumber -= lastCount;
//     }
//     console.log('finished');
// }
// printNumbers(10);
// const sumNumbersFromRange = (start: number, finish: number): number => {
//     // Технически можно менять start
//     // Но входные аргументы нужно оставлять в исходном значении
//     // Это сделает код проще для анализа
//     let count = start;
//     let sum = 0; // Инициализация суммы
//     while (count <= finish) { // Двигаемся до конца диапазона
//         sum += count; // Считаем сумму для каждого числа
//         count += 1; // Переходим к следующему числу в диапазоне
//     }
//     // Возвращаем получившийся результат
//     return sum;
// };
// console.log(sumNumbersFromRange(1, 5));
// const multiplyNumbersFromRange = (start: number, finish: number): number => {
//     let count = start;
//     let multiply = 1;
//     while (count <= finish) {
//         multiply *= count;
//         count += 1;
//     }
//     return multiply;
// }
// console.log(multiplyNumbersFromRange(1,3));
"";
// function joinNumbersFromRange(num1: number, num2: number): string {
//     let startCount = num1;
//     let string = '';
//     while (startCount <= num2) {
//         string += startCount;
//         // string = `${string}${startCount}`
//         startCount += 1;
//     }
//     return string;
// };
// console.log(joinNumbersFromRange(1, 4));
// const mySubstr = (text: string, textLength: number): string => {
//     let string = '';
//     let index = 0;
//     while (index < textLength) {
//         string += text[index];
//         // string = `${string}${text[index]}`
//         index += 1;
//     }
//     return string;
// }
// console.log(mySubstr('text', 2));
// const countChars = (text: string, char: string): number => {
//     let index = 0;
//     let count = 0;
//     while (index < text.length) {
//         if (text[index] === char) {
//             // Считаем только подходящие символы
//             count = count + 1;
//         }
//         // Счетчик увеличивается в любом случае
//         index += 1;
//     }
//     return count;
// };
// console.log(countChars('hello this is me', 'i'));
// const isPrime = (number: number): boolean => {
//     if (number < 2) {
//         return false;
//     }
//     let divider = 2;
//     while (divider <= number / 2) {
//         if (number % divider === 0) {
//             return false;
//         }
//         divider += 1;
//     }
//     return true;
// }
// console.log(isPrime(2));
// const countChars = (text: string, char: string) => {
//     const newText = text.toUpperCase();
//     const newChar = char.toUpperCase();
//     let i = 0;
//     let count = 0;
//     while (i < newText.length) {
//         if (newText[i] === newChar) {
//             count += 1;
//         }
//         i += 1;
//     }
//     return count;
// };
// console.log(countChars('HeLlo', 'L'));
// let num: number = 0;
// console.log(num++);
// console.log(num);
// console.log('');
// let num2: number = 0;
// console.log(++num2);
// console.log(num2);
// const str: string = 'HELLO';
// let result: string = '';
// let i: number = 0;
// while (i < str.length) {
//     const current: string = str[i];
//     ++i;
//     result = `${result}${current.toLowerCase()}`
//     i++;
//     console.log(result);
// }
// const makeItFunny = (text: string, numberOfCharToUpCase: number): string => {
//     let result: string = '';
//     let index: number = 0;
//     while (index < text.length) {
//         const current: string = text[index];
//         if ((index + 1) % numberOfCharToUpCase === 0) {
//             result += current.toUpperCase();
//         } else {
//             result += current;
//         }
//         index++;
//     }
//     return result;
// }
// console.log(makeItFunny('hello', 2));
// const reverseString = (text: string): string => {
//     let result: string = '';
//     for (let i = 0; i < text.length; i ++) {
//         result = `${text[i]}${result}`;
//     }
//     return result;
// };
// console.log(reverseString('hello'));
// const encrypt = (text: string): string => {
//     let result: string = '';
//     for (let i = 0; i < text.length; i += 3) {
//         const nextSymbol = text[i + 1] || '';
//         result = `${result}${nextSymbol}${text[i]}`;
//     }
//     return result;
// };
// console.log(encrypt('hello'));
// function getTriangleArea(a: number, b: number): number {
//     return 1 / 2 * a * b;
// };
// console.log(getTriangleArea(5, 10));
// function func(n: number): number {
//     return getTriangleArea(n, n ** 2 / 2);
// };
// console.log(func(4));
/*
Задание #3

Необходимо написать программу, в которой нужно определить переменные (указать для них свои значения):
productName — название товара.
productPrice — стоимость.
productQuantity — количество купленного товара.
resultCost — итоговая стоимость (высчитать динамически, с учетом цены и количества товара).
Выведите в консоль строку, в которой на месте фигурных скобок будут соответствующие значения переменных:
“Вы купили {productName} ({productQuantity} шт.) по {productPrice} ₽. Всего было потрачено: {resultCost} ₽”.

const productName = 'Яблоко';
const productPrice = 50;
const productQuantity = 10;
const resultCost = productPrice * productQuantity;

console.log(`“Вы купили ${productName} (${productQuantity} шт.) по ${productPrice} ₽. Всего было потрачено: ${resultCost} ₽”`);
*/
/*
Задание #4

Выведите в консоль следующие выражения:
typeof 'Hello'
typeof 10
typeof {}
typeof null
typeof undefined
typeof true
typeof []
typeof (() => {})
Проанализируйте результат выполнения программы и определите для себя, почему произошел тот или иной вывод.

console.log(typeof 'Hello');
console.log(typeof 10);
console.log(typeof {});
console.log(typeof null);
console.log(undefined);
console.log(typeof true);
console.log(typeof []);
console.log(typeof (() => {}));
*/
/*
Задание #5

Выведите в консоль следующие выражения:
10 == 10
10 != 10
12 == 'Привет'
10 < 11
12 > 20
true && true
true && false
false && true
false || true
true || false
true || true
10 <= 10
18 <= 20
50 >= 50
51 >= 50
{} === {}
{} == {}
*/
/*
Задание #6

Создайте переменную a и b, присвойте им любые числа. Если a больше b, выведите в консоль true, иначе — false.
P. S. Нельзя использовать if...else и тернарный оператор.

const a = 4;
const b = 6;

console.log(a > b);
*/
/*
Задание #1

Создайте переменную a, присвоив в нее любое число.
Если значение переменной четное, выведите в консоль “Четное”.
Если значение переменной нечетное:
Выведите обновленное значение a.
Прибавьте к a + 1.
выведите в консоль “Нечетное”.

const a = 4;
if (a % 2 === 0) {
    console.log('Четное');
} else {
    console.log('Нечетное');
}
*/
/*
Задание #2

Напишите программу, которая последовательно выводит числа в диапазоне [0, 1000], удовлетворяющие одному из условий:
Число нечетное.
Число кратно 12.

for (let i = 0; i < 1001; i++) {
    if (i % 2 !== 0 || i % 12 === 0) {
        console.log(i);
    }
}
*/
/*
Задание #3

Создайте массив со значениями [1, 10, 15, -100, -23, 19, 15032].
Получите из него новый массив, в котором каждый элемент будет увеличен на 25%.
Выведите оба массива в консоль.

// Первый вариант через map
const arr = [1, 10, 15, -100, -23, 19, 15032];
const arr2 = arr.slice().map(item => item * 1.25);

console.log(arr);
console.log(arr2);

// Второй вариант через for of
const arr = [1, 10, 15, -100, -23, 19, 15032];
const arr2 = [];

for(const element of arr) {
    arr2.push(element * 1.25);
}

console.log(arr);
console.log(arr2);
*/
/*
Задание #4

Создайте функцию, объявленную с помощью ключевого слова function, с именем sayHello(). Она принимает в параметры name и возвращает строку вида: "Hello, {name}!". Если функция была вызвана без указания name, то выведите строку "Hello, someone!".
Закомментируйте функцию и напишите аналогичную, но в виде стрелочной функции.

// function sayHello(name = 'someone') {
//     return `Hello ${name}!`
// };

const sayHello = (name = 'someone') => `Hello ${name}!`;
*/
/*
Задание #5

Напишите функцию calc(), которая принимает в параметры a и b, а также operation. В зависимости от переданной операции (+, -, /, *) возвращаем необходимый результат выражения с числами.

const calc = (a: number, b: number, operation: string): number | undefined => {
    if (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
        throw new Error("оператор должен быть указан!");
    } else {
        switch (operation) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '/':
                return a / b;
            case '*':
                return a * b;
            default:
                break
        }
    }
};

console.log(calc(2, 4, 'd'));
*/
/*
Задание #6

Создайте переменную age, присвоив ей числовое значение.
Создайте переменную category, присвоив ей с помощью тернарного оператора значение:
"Взрослый" — если age больше или равно 18.
"Детский" — если age меньше 18.
Выведите переменные в консоль.

const age = 25;
const category = age >= 18 ? 'Взрослый' : 'Детский';

console.log(age, category);
*/
/*
Задание #7

Создайте переменные a и b с числовыми значениями.
Создайте переменную c, в которую с помощью тернарного оператора присвоите наибольшее значение (или a, или b).
Выведите значение c в консоль.

const a = 1;
const b = 4;
const c = a > b ? a : b;

console.log(c);
*/
/*
Задание #1

Создайте 2 объекта john и ann с полями name, age, pet и заполните их именем, возрастом и именем питомца соответственно.
Создайте функцию, которая в параметры принимает объект человека (john или ann), и в качестве результата выводит информацию о нем в консоль: “Меня зовут {name}, мне {age}, у меня есть питомец {pet}”.
Создайте функцию incrementAge(), которая в параметры принимает объект человека и увеличивает ему возраст на 1.
Выведите циклом все названия свойств и их значения, которые есть у объекта john.

const john = {
    name: 'John',
    age: 25,
    pet: 'Archi'
};

const ann = {
    name: 'Ann',
    age: 28,
    pet: 'Ryan'
};

const introduce = (human) => {
    console.log(`Меня зовут ${human.name}, мне ${human.age}, у меня есть питомец ${human.pet}`);
};

const incrementAge = (human) => {
    return human.age ++;
};

for (const key in john) {
    console.log(`Свойство: ${key}, Значение: ${john[key]}`);
};
*/
/*
Задание #2

Создайте функцию, которая на вход принимает массив, а на выходе возвращает сумму его элементов:

// через for
// const sumArr = (arr: number[]): number => {
//     let sum: number = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// };

// console.log(sumArr([1,2,3,4,5]));

// через for in
// const sumArr = (array: number[]): number => {
//     let sum: number = 0;

//     for (const i of array) {
//         sum += i;
//     }
//     return sum;
// };

// console.log(sumArr([1, 2, 3, 4, 5, 6]));


*/
/** Найдите сумму всех чисел меньше 1000, кратных 3 или 5.
 *
 const sumFunc = (number: number): number => {
 
     let sum: number = 0;
 
     for (let index = 0; index < number; index++) {
         if (index % 3 === 0 || index % 5 === 0) {
             sum += index;
         }
     }
     return sum;
 }
 
 console.log(sumFunc(7));
 *
 */
/*
Задание #3

Создайте пустой массив names. Добавьте в него 5 любых имен. Выведите массив в консоль. Уберите из начала и конца массива по 1 элементу. Снова выведите массив в консоль.

const names: string[] = ['Alex', 'Kaleb', 'Jack', 'Jill', 'Kyle'];
console.log(names);

names.pop();
names.shift()
console.log(names);
*/
/*
Задание #4

Дан массив names. Необходимо сделать функцию, которая на основе этого массива генерирует строку c HTML. Она представляет из себя список элементов (<ul>), где каждый элемент списка (<li>) содержит элемент массива.

const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];

const func = (array: string[]): void => {
    let list = document.createElement('ul');
    array.forEach(element => {
        let li = document.createElement('li');
        li.innerText = element;
        list.appendChild(li);
    });
};

// второй простой способ через map
const render = (names: string[]): string => `<ul>${names.map(item => `<li>${item}</li>`).join('')}</ul>`;
*/
/*
Задание #5
Дан объект:

const obj = {
    age: 22,
    favColor: 'red',
    height: 188,
    pet: 'dog',
    money: 12300
}

Необходимо выполнить деструктуризацию объекта (для всех полей). Выведите полученные переменные в консоль.

const obj = {
    age: 22,
    favColor: 'red',
    height: 188,
    pet: 'dog',
    money: 12300
}

const { age, favColor, height, pet, money } = obj;
console.log(age, favColor, height, pet, money);
*/
// Необходимо выполнить деструктуризацию объекта(для всех полей).Выведите полученные переменные в консоль.
// interface Person {
//     age: number;
//     favColor: string;
//     height: number;
//     pet: string;
//     money: number;
//   }
// const obj: Person = {
//     age: 22,
//     favColor: 'red',
//     height: 188,
//     pet: 'dog',
//     money: 12300
// }
// const { age, favColor, height, pet, money } = obj;
// console.log(age, favColor, height, pet, money);
// Задание #6
// Даны объекты:
// const obj = {
//     age: 22,
//     favColor: 'red',
//     height: 188,
//     pet: 'dog',
//     money: 12300
// };
// const updateObj = {
//     age: 23,
//     favColor: 'blue',
//     money: 11450
// };
// const obj2 = { ... };
// console.log(obj2);
//
//  {
//  age: 23,
//  favColor: 'blue',
//  height: 188,
//  pet: 'dog',
//  money: 11450
//  }
//
//  Необходимо создать новый объект obj2, в котором будут все поля объекта obj, но с обновленными значениями полей как у объекта updateObj.
// interface Person {
//     age: number;
//     favColor: string;
//     height: number;
//     pet: string;
//     money: number;
// }
// const obj: Person = {
//     age: 22,
//     favColor: 'red',
//     height: 188,
//     pet: 'dog',
//     money: 12300
// };
// console.log(obj);
// const updateObj: Partial<Person> = {
//     age: 23,
//     favColor: 'blue',
//     money: 11
// };
// const obj2 = Object.assign({}, obj, updateObj);
// второй способ через spread
// const obj2 = { ...obj, ...updateObj };
// console.log(obj2);
// Задание #1
// Реализуйте функцию isPrimeNumber(), которая принимает число и возвращает true, если оно простое, иначе — false.
// const isPrimeNumber = (number: number): boolean => {
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false
//         }
//     }
//     return number !== 1;
// }
// console.log(isPrimeNumber (6));
// */
/*
Задание #2

Напишите функцию func(), которая принимает num, min, max:
Если число num < min, то функция возвращает min ** 2.
Если число num > max, функция возвращает max ** 2.
Если число num < max - (max - min) / 2, то функция возвращает num ** 2.
Иначе возвращает округленное вниз значение num.


*/
var func = function (num, min, max) {
    if (num < min) {
        return Math.pow(min, 2);
    }
    else if (num > max) {
        return Math.pow(max, 2);
    }
    else if (num < max - (max - min) / 2) {
        return Math.pow(num, 2);
    }
    else {
        Math.round(num);
    }
};
console.log(func(3, 1, 10));
