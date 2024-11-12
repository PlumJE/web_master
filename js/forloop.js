// forloop.js
// 1 ~ 5 까지 합 -> sum 변수 누적.

let sum = 0;
sum += 1;
sum += 2;
sum += 3;
sum += 4;
sum += 5;
console.log('1 ~ 5 까지의 합 : ' + sum);

sum = 10 % 3;

sum = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        sum = sum + i;  // i값=1, 2, 3, 4, 5
        console.log('i는 ' + i + ' 이고, sum은 ' + sum + '입니다.');
    }
}
console.log('1 ~ ' + '까지의 합 : ' + sum);