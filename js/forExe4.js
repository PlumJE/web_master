// forExe4.js

let fnames = [];    // 배열 변수 선언.

function addFriendFnc() {
    // 사용자 입력값을 확인 => 목록으로 출력.
    let fname = document.querySelector('#inputValue').value;
    fnames.push(`<p>${fname}</p>`);
    console.log(fnames);
    
    // 출력
    let str = ''
    for (let i = 0; i < fnames.length; i++) {
        str += fnames[i];
    }
    document.querySelector("#show").innerHTML = str;
}