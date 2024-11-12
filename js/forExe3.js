// forExe3.js
// 점수를 5번 입력.
// 점수의 합(sum), 평균(average) 저장.
// 최댓값(max) 저장.
// 최소값(min) 저장.

// 합계는 ?? 이고, 평균은 ?? 이고, 최고점수는 ?? 입니다.

var sum = 0, average = 0
var max = 0, min = 100; // 입력값의 범위를 0~100으로 가정했기 때문

for (var i = 1; i <= 5; i++) {
    input = Number(prompt("점수를 입력하세요"));
    sum += input;
    if (max < input) {
        max = input;
    }
    if (min > input) {
        min = input;
    }
}
average = sum / 5;

alert(`합계는 ${sum} 이고, 평균은 ${average} 이고, 최고점수는 ${max}, 최저점수는 ${min} 입니다.`);