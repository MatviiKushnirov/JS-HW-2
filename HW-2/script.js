// Task 1
// Створити змінні для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.

let celsiusTemp = 30;
let fahrenheitTemp = (celsiusTemp * 1.8) + 32;

console.log(`Task 1 result(fahrenheit temp) >>> ${fahrenheitTemp}`);

// Task 2
// Створити змінну для зберігання кількості днів у місяці. Обчислити кількість годин та хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.

let dayInMonth = 30;
let hourInMonth = 24 * dayInMonth;
let minuteInMonth = 60 * hourInMonth;

console.log(`Task 2 result >>> In June 30 days then ${hourInMonth} hours and ${minuteInMonth} minutes`);

// Task 3
// Створити змінні для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.

let marioHealth = 100;
let marioEnergy = 50;

console.log(`Task 3 >>> HP:${marioHealth} CP:${marioEnergy} Game Starts... Snake punched Mario... new HP:${marioHealth - 30} new CP:${marioEnergy - 15}`);

// Task 4
// Створити змінну для зберігання суми покупки в магазині. Застосувати знижку в розмірі 10% до цієї суми за допомогою оператора множення та вивести результат в консоль.

let purchaseSum = 3000;
let discountSum = purchaseSum - (purchaseSum * 0.1);

console.log(`Task 4 >>> I bought pizza for ${purchaseSum} UAH with discount(10%) it will be ${discountSum}`);

// Task 5
// Створити змінну для зберігання числа з плаваючою комою. Використати метод Math.floor() для округлення числа до меншого та вивести результат в консоль.

let myNum = 2.7;

console.log(`Task 5 >>> ${Math.floor(myNum)}`);

// Task 6
// Створити змінну для зберігання рядка, який містить числа з плаваючою комою. Використати метод parseFloat() для перетворення рядка у десяткове число та вивести результат в консоль.

let divHeight = "46.57px";

console.log(`Task 6 >>> ${parseFloat(divHeight)}`);

// Task 7
// Створити змінну для зберігання рядка, який містить ціле число. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль.

let spanWidth = "123.4px";

console.log(`Task 7 >>> ${parseInt(spanWidth)}`);

// Task 8
// Створити змінну для зберігання числа. Використати метод Math.sqrt() для обчислення квадратного кореня числа та вивести результат в консоль.

let sqrtNum = 2401;

console.log(`Task 8 >>> ${Math.sqrt(sqrtNum)}`);

// Task 9
// Створити змінні для зберігання цілочисельного значення та рядка з числом у вигляді рядка. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль. Потім використати метод toString() для перетворення цілочисельного значення у рядок та вивести результат в консоль.

let firstNum = 24;
let secondNum = "76yigiugiyu";

console.log(`Task 9 >>> parseInt result - ${parseInt(secondNum)}, toString result - ${firstNum.toString()}`);