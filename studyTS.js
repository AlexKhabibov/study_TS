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
function getTriangleArea(a, b) {
    return 1 / 2 * a * b;
}
;
console.log(getTriangleArea(5, 10));
function func(n) {
    return getTriangleArea(n, Math.pow(n, 2) / 2);
}
;
console.log(func(4));
