// builtin.js (내장객체)
// 날짜(Date객체)

let today = new Date();
today.setFullYear(2023, 5-1, 31);

console.log(today.getFullYear());
console.log(showTime(today));
console.log(`월:${today.getMonth() + 1}, 일:${today.getDate()}, 요일:${today.getDay() + 1}`);
// today.getHours() + today.getMinutes() + today.getSeconds()

function showTime(time = new Date()) {
    // 2024-11-13 14:22:23
    let yyyy = time.getFullYear();  // 2024
    let MM = time.getMonth() + 1;   // 10 -> 11월
    let dd = time.getDate();    // 14일

    let HH = time.getHours();
    let mm = time.getMinutes();
    let ss = time.getSeconds();
    ss = (String(ss).length == 1) ? ('0' + ss) : ss;
    let day = ['월', '화', '수', '목', '금', '토', '일'][today.getDay()];

    return yyyy + '-' + MM + '-' + dd + ' ' + HH + ':' + mm + ':' + ss + ' ' + day + '요일';
}