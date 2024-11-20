// 과제.js

// [1번] 자리배치 -> 몇줄을 만들어야 될까?
// 입장객 수 = 10명
// 한 줄에 3명씩 앉음
// 자리는 몇줄?
// 입장객수 / 한줄 사람수 -> 정수 (소숫점 이하 없음)
let visitors = 10;
const cols = 3;

let rows = Math.ceil(visitors / cols);
let leftout_seats = visitors % cols;

answer1.innerHTML = "자리는 " + rows + "줄 필요하고, 마지막 줄에는 " + leftout_seats + "개의 자리가 필요.";

let table_content = "<tbody><tr>";
for (let i = 0; i < visitors; i++) {
    if (i % cols == 0) {
        table_content += "</tr><tr>";
    }
    table_content += "<td>" + (i + 1) + "</td>";
}
table_content += "</tr></tbody>";
answer1_table.innerHTML = table_content;


// [2번] 구구단 출력
// 2 * 1 = 2   3 * 1 = 3   4 * 1 = 4   5 * 1 = 5   ...
// 2 * 2 = 4   3 * 2 = 6   4 * 2 = 8   5 * 2 = 10  ...
// 2 * 3 = 6   3 * 3 = 9   4 * 3 = 12  5 * 3 = 15  ...
// ...
// 2 * 9 = 18  3 * 9 = 27  4 * 9 =36   5 * 9 = 45  ...
table_content = "<tbody>";
for (let row = 1; row <= 9; row++) {
    table_content += "<tr>";
    for (let col = 2; col <= 9; col++) {
        table_content += `<td>${col} * ${row} = ${col * row}</td>`;
    }
    table_content += "</tr>";
}
table_content += "</tbody>";
answer2.innerHTML = table_content;

// [3번] [20, 17, 45, 11, 82]의 배열을 오름차순으로 정렬
let list = [20, 17, 45, 11, 82];

let result = list.sort(function(a, b) {
    return a - b;
})

answer3.innerHTML = "[" + result.toString() + "]";
answer3.innerHTML += "<br>(* Array.prototype.sort() 메소드를 사용해 풀었습니다.)";