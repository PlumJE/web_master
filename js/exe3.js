// exe3.js
// 1. 태어난 년도 입력 -> 나이 계산(2024년 기준).
// 2. 직사각형 넓이 계산 -> 가로길이, 세로길이 입력.
// 3. 최대값, 최소값 -> 입력받는 숫자는 3개(prompt 3번)

let question = 3;

if (question == 1) {
    // 1번 코드.
    var input = prompt("탄생년도를 입력하세요");

    var age = 2024 - input;
    alert("2024년 당신은 " + age + "세 입니다.");
}
else if (question == 2) {
    // 2번 코드.
    var width = prompt("직사각형의 가로 길이를 입력하세요");
    var height = prompt("직사각형의 세로 길이를 입력하세요");

    var area = width * height;
    alert("직사각형의 넓이는 " + area + "입니다.");
}
else {
    // 3번 코드.
    let var1 = Number(prompt("첫번째 숫자를 입력하세요"));
    let min;
    let max;

    let var2 = Number(prompt("두번째 숫자를 입력하세요"));
    if (var1 < var2) {
        min = var1;
        max = var2;
    }
    else {
        max = var1;
        min = var2;
    }

    alert("최대값은 " + max + ", 최소값은 " + min + "입니다.");

    let var3 = Number(prompt("세번째 숫자를 입력하세요"));
    if (min > var3) {
        min = var3;
    }
    if (max < var3) {
        max = var3;
    }

    alert("최대값은 " + max + ", 최소값은 " + min + "입니다.");
}