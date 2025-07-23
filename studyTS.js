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
