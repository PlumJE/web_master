// exe2.js
// if ... else ... 문제 풀기

var number1 = 30;

// 사용자 값을 입력하도록 "숫자를 입력하세요(0~100) "
// 변수선언 후 저장

var number2 = prompt("숫자를 입력하세요(0~100) ");

// 0 ~ 100 사이의 값을 입력하세요.
// 35는 30보다 큽니다.
// 25는 30보다 작습니다.

if (number2 < 0 || 100 < number2) {
    alert("0 ~ 100 사이의 값을 입력하세요.")
}
else if (number1 < number2) {
    alert(number2 + "은/는 30보다 큽니다.");
}
else if (number1 == number2) {
    alert(number2 + "은/는 30과 같습니다.");
}
else {
    alert(number2 + "은/는 30보다 작습니다.");
}