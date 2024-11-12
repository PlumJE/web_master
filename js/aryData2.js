// aryData2.js

document.querySelector("#inputValue").remove();
document.querySelector("#addBtn").remove();
document.querySelector("span").remove();

let numAry = [22, 45, 18, 41, 98, 55];
let max = 0;
let n = prompt('아무값이나 입력하세요');
let sum = 0;

for (let i = 0; i < numAry.length; i++) {   // i는 0부터 numAry.length까지
    //if (i % 2 == 0 || numAry[i] > 40) {
    //if (max < numAry[i]) {
    //     console.log(numAry[i]);
    //     max = numAry[i];
    // }
    if (parseInt(n) < numAry[i]) { // 만일 n보다 numAry[i]가 크면
        sum += numAry[i];   // sum에 numAry[i]을 추가
    }
}
console.log(k);