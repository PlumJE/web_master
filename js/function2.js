// function2.js

// let sum = 0;

// 함수 선언식
// function sum(param1, param2) {
//     return param1 + param2;
// }

// 함수 표현식
let sum = function(param1 = 0, param2 = 0) {
    // falsy => 0, '', null, undefined
    // if (!param1 || !param2) {
    //     return 0;
    // }
    return param1 + param2;
}
console.log(sum(3, 6));
// console.log(sum(undefined, undefined));
// console.log(undefined + undefined);

// 화살표 함수
let getMaxFunc = (num1 = 0, num2 = 0) => (num1 > num2) ? num1 : num2;
console.log(getMaxFunc(10, 7));
// {
//     if (num1 > num2) {
//         return num1;
//     }
//     else {
//         return num2;
//     }
//     let result = (num1 > num2) ? num1 : num2;
//     return result;
// }