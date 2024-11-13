// exe4.js
// 2024년 11월 12일 숙제.
// 우리반에는 5명의 친구. 5명의 성적을 입력
// 합산 => 평균, 최고점수, 최저점수 구해서
// 우리반 평균은 ??이고, 최고점은 ??이고, 최저점은 ??이다.

console.log('exe4.js');

var scores = [];    // 10, 20, 30, 40, 50
const len = 5;
for (var i = 0; i < len; i++) {
    input = prompt(`${i + 1}번째 친구의 점수를 입력`);
    scores.push(parseInt(input));
}

var sum = 0;
var max = 0;
var min = 100;
for (var i = 0; i < scores.length; i++) {
    sum += scores[i];
    if (max < scores[i]) {
        max = scores[i];
    }
    if (min > scores[i]) {
        min = scores[i];
    }
}

alert("우리반 평균은 " + (sum / scores.length) + "이고, 최고점은 " + max + "이고, 최저점은 " + min + "이다.");