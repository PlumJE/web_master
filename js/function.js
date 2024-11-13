// function.js
// 기능을 구현하기 위한 실행명령의 조합.

// 두 수 입력 => 첫번째 값에 +5, 두번째 값 +3 => 두 수 곱한 결과값.
let result;
result = calculateFunc(10, 20, document.querySelector('.result')); // 함수호출시 => 실제값 전달
result = calculateFunc(5, 7, document.querySelector('.value'));

// 함수 생성하는 곳에는 매개변수를 생성한다
function calculateFunc(param1, param2, param3) {
    let num1 = param1, num2 = param2;

    num1 += 5;
    num2 += 3;

    param3 = '<b>' + (num1 * num2) + '</b>';
    return (num1 * num2);
}

// 10 + 20 => ?
// 5 + 7 => ?
// (10 + 20) + (5 + 7) => ??
function sum (num1, num2) {
    return num1 + num2;
}

result = sum(sum(10, 20), sum(5, 7));
//result = sum(30, 12);
//result = 42;
console.log(result);