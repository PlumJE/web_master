// forExe2.js
// 1 ~ 10 까지의 2의 배수 => sum2, 3의 배수 => sum3 변수에 저장.

var sum2 = 0, sum3 = 0;
for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        sum2 += i;
    }
    if (i % 3 == 0) {
        sum3 += i;
    }
}

console.log("2의 배수의 합은 " + sum2 + ", 3의 배수의 합은 " + sum3 + "입니다.");