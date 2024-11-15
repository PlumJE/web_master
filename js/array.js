// array.js

let numAry = new Array(); // []; 배열객체 생성
numAry[0] = 10;
numAry.push(20);
numAry.push(25);
numAry.push(35);

// 첫번째 제거. shift
console.log('제거된 값', numAry.shift());
console.log('제거된 값', numAry.pop());
numAry.unshift(99);

console.log(numAry.length);
for (let number of numAry) { // for .. of 반복문
    console.log(number);
}

// 배열일 경우에 method.
numAry.forEach(function(
    param1, // 배열 요소
    param2, // 배열 인덱스
    param3  // 배열 자신
) {
    console.log(param1, param2, param3);
});

// 배열의 합계
let sum = 0;
numAry.forEach(elmnt => sum += elmnt);
console.log('배열의 합계 : ' + sum);

let obj = {
    name: "Hong",
    age: 20,
    weight: 66.7
}
for (let prop in obj) { // for .. in 반복문
    console.log(prop);
}