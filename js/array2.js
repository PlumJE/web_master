// array2.js

let numAry = [23, 31, 56, 34, 77, 90];

numAry.forEach(function(num, idx) {
    console.log(idx, " => ", num);
})

// 조건을 만족하는 새로운 배열 생성.
let newAry = numAry.filter(function(num) {
    if (num > 50) {
        return true;
    }
    else {
        return false;
    }
});

console.log(newAry);

let fruits = ['apple', 'banana', 'cherry', 'melon'];
let efruits = fruits.filter(function(elmnt) {
    // console.log(elmnt);
    if (elmnt.indexOf('e') != -1) {
        return true;
    }
    else {
        return false;
    }
});

console.log(efruits);