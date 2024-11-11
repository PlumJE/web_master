// exe1.js

console.log('exe1.js');

var numberAry = [10, 22, 39, 84];
var param1 = prompt('첫 번째 인덱스를 입력하세요[0~3].');
var param2 = prompt('두 번째 인덱스를 입력하세요[0~3].');

var result = numberAry[param1] + numberAry[param2];
console.log(result)     // 콘솔에 출력 => 22 + 84 = 106