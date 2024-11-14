// operator.js

// document.querySelector('#add').onclick = function() {           // id="add"인 버튼의 onclick이벤트를 예약한다
//     let num1 = Number(document.querySelector('#num1').value);   // id="num1"인 input에서 값을 가져온다.
//     let num2 = Number(document.querySelector('#num2').value);   // id="num2"인 input에서 값을 가져온다.
//     document.querySelector('#result').value = num1 + num2;      // 두 숫자를 연산하여 id="result"인 태그에 다시 넣는다.
// }

// document.querySelector('#sub').onclick = function() {
//     let num1 = Number(document.querySelector('#num1').value);
//     let num2 = Number(document.querySelector('#num2').value);
//     document.querySelector('#result').value = num1 - num2;
// }

// document.querySelector('#multy').onclick = function() {
//     let num1 = Number(document.querySelector('#num1').value);
//     let num2 = Number(document.querySelector('#num2').value);
//     document.querySelector('#result').value = num1 * num2;
// }

// document.querySelector('#divid').onclick = function() {
//     let num1 = Number(document.querySelector('#num1').value);
//     let num2 = Number(document.querySelector('#num2').value);
//     document.querySelector('#result').value = num1 / num2;
// }

function calculate(e_info) {
    let val1 = document.getElementById('num1').value;
    val1 = Number(val1);
    let val2 = document.getElementById('num2').value;
    val2 = Number(val2);

    let result;
    switch (e_info.target.innerHTML) {
        case "더하기":
            result = val1 + val2;
            break;
        case "빼기":
            result = val1 - val2;
            break;
        case "곱하기":
            result = val1 * val2;
            break;
        case "나누기":
            result = val1 / val2;
            break;
    }
    document.querySelector('#result').value = result;
}

document.getElementById('add').onclick = calculate;
document.getElementById('sub').onclick = calculate;
document.getElementById('multy').onclick = calculate;
document.getElementById('divid').onclick = calculate;