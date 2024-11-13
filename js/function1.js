// function1.js

let numAry1 = [50, 60, 40, 70, 20];
let numAry2 = [55, 63, 42, 70, 27];

console.log(
    sum(numAry1, numAry2)
);
// console.log(num([50, 60, 40, 70, 20], [55, 63, 42, 70, 27]))
// let result = [50, 60, 40, 70, 20] + [55, 63, 42, 70, 27]
// result = [50, 60, 40, 70, 2055, 63, 42, 70, 27];
// return result;
// return [50, 60, 40, 70, 2055, 63, 42, 70, 27];

console.log(
    sumAry(numAry1)
);
// console.log(sumAry([50, 60, 40, 70, 20]));
// sum = 50 + 60 + 40 + 70 + 20;
// sum = 240;
// console.log(sum);
// console.log(240);

console.log(
    sumAry(numAry2)
);
// console.log(sumAry([55, 63, 42, 70, 27]));
// sum = 55 + 63 + 42 + 70 + 27;
// sum = 257;
// console.log(sum);
// console.log(257);

console.log(
    sum(
        sumAry(numAry1), 
        sumAry(numAry2)
    )
);
// console.log(sum(240, 257));
// console.log(497);

function sum(param1, param2) {
    let result = param1 + param2;
    return result;
}

// 매개값을 배열로 받아서 배열요소의 합
function sumAry(param) {
    let sum = 0;
    for (let i = 0; i < param.length; i++) {
        sum += param[i];
    }
    return sum;
}

// 배열의 매개값으로 받아서 요소중에서 제일 큰 값을 구하는 함수.
function getMaxValue(array_parameter) {
    if (array_parameter.length == 0) {
        return null;
    }
    
    let max = array_parameter[0];
    for (let i = 1; i < array_parameter.length; i++) {
        if (max < array_parameter[i]) {
            max = array_parameter;
        }
    }
    return max;
}

console.log(
    getMaxValue(numAry1)
);