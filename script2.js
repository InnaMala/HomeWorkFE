// First level: 1. Напишите следующую функцию, которая принимает некий массив данных. 
// если в массиве только строковый тип данных, то функция должна находить самую длинную строку и возвращать массив из двух элементов - эту строку и её индекс исходном массиве 
// если в массиве только цифры, то функция должна находить самую большую цифру и возвращать массив из двух элементов - из этой цифры и её индекса в исходном массиве
// во всех остальных случаях (если там другие типы данных или же они смешаны), то функция должна возвращать массив из двух элементов - первый это строка 'неверный тип данных в массиве', а второй элемент это общая длина массива.

let arrayWords = ['Inna', 'James', 'Ivan', 'Iren'];
let arrayNumbers = [1, 3, 5, 90, 25];
let arrayMix = [null, 'qwerty', 5, 12, 'color', 'black', 'street', 45]

let functionName = array => {
    let newArray = [];
    let newIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            for (let i = 0; i < array.length; i++) {
                if (array[i].length > array[newIndex].length) {
                    newIndex = i;
                }
            }
            newArray.push(array[newIndex], newIndex);
            return newArray;
        }
        if (typeof array[i] === 'number') {
            for (let i = 0; i < array.length; i++) {
                if (array[i] > array[newIndex]) {
                    newIndex = i;
                }
            }
            newArray.push(array[newIndex], newIndex);
            return newArray;
        }
        if (typeof array[i] != 'number' && typeof array[i] != 'string') {
            newArray.push('неверный тип данных в массиве', array.length);
            return newArray;
        }
    }
}
console.log(functionName(arrayWords));
console.log(functionName(arrayNumbers));
console.log(functionName(arrayMix));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// First level: 1. Фильтрация по диапазону
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.
// Например:
let arr = [5, 3, 8, 1, 45, 260, 6, 9];
// let filtered = filterRange(arr, 1, 4);
// console.log( filtered ); // 3,1 (совпадающие значения)
// console.log( arr ); // 5,3,8,1 (без изменений)
// ========================================================


let filterRange = (arr, a, b) => {
    let newFilter = arr.filter(element => element >= a && element <= b);
    return newFilter;
}
console.log(filterRange(arr, 1, 4));
console.log(filterRange(arr, 7, 9));
console.log(arr);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// First level
// Подсчёт количества свойств объекта
// Напишите функцию count(obj), которая возвращает количество свойств объекта:
// let user = {
//    name: 'John',
//    age: 30
// };
// console.log( count(user) ); // 2
// =========================================================

let user = {
    firstname: 'John',
    lastname: 'Davidson',
    age: 30
};
 let count = (object) => {
    let count = 0;
    for (const key in object) {
        count+=1;
    }
    return count;
 }
 console.log( count(user) );

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// First level: 02.11.2022
// Напишите функцию, которая поверхностно сравнивает два объекта.
// Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true

const data = { a: 1, b: 2 };
const data2 = { a: 1, b: 3 };
const data3 = { a: 2, b: 4 };
// console.log(isEqual(data, data2)); // true
// console.log(isEqual(data, data3)); // false

function isEqual(object1, object2) {
    for (const key1 in object1) {
        for (const key2 in object2) {
            if (object1[key1] != object2[key2]) {
                return false;
            }
        }
    }
    return true;
}
    console.log(isEqual(data, data2));
    console.log(isEqual(data, data3))

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++


    // Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
    const data6 = { a: 1, b: 2 };
    const data4 = { c: 1, b: 2 };
    // console.log(intersection(data, data2)); // { b: 2 }

    function isCross(object1, object2) {
        let object3 = {};
        for (const key1 in object1) {
            for (const key2 in object2) {
                if (object1[key1] === object2[key2] && key1 === key2) { 
                    object3[`${key1}`] = object1[key1]

                }
            }
        }
        return object3;
    }
    console.log(isCross(data4, data6));