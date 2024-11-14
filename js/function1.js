// function1.js

let numAry1 = [50, 60, 40, 70, 20];
let numAry2 = [55, 63, 42, 70, 27];

console.log(sum(numAry1, numAry2));

function sum(param1, param2) {
    let result = param1 + param2;
    return result;
}

// 매개값을 배열로 받아서 배열요소의 합
console.log(sumAry(numAry1));
console.log(sumAry(numAry2));
console.log(sum(sumAry(numAry1), sumAry(numAry2)));

function sumAry(param) {
    let sum = 0;
    for (let i = 0; i < param.length; i++) {
        sum += param[i];
    }
    return sum;
}

// 배열을 매개값으로 받아서 요소중에서 제일 큰 값을 구하는 함수.
function getMaxValue(array_parameter) {
    if (array_parameter.length == 0) {
        return null;
    }
    
    let max = array_parameter[0];
    for (let i = 1; i < array_parameter.length; i++) {
        if (max < array_parameter[i]) {
            max = array_parameter[i];
        }
    }
    return max;
}

console.log(getMaxValue(numAry1));

// Math.random() 활용해서 11 ~ 20 사이의 임의 수 생성:
// 배열[5]에 저장.
function makeNumberFnc() {
    let randomAry = [];
    for (let i = 0; i < 5; i++) {
        randomAry.push(parseInt(Math.random() * 10 + 11));
    }

    console.log(randomAry);
    return sumAry(randomAry);
}

// 결과: 임의의 배열의 합은 ?? 입니다.
result = makeNumberFnc();
console.log('임의의 배열의 합은 ' + result + '입니다.');