// object2.js

// 함수: function
// 함수호출
let f1 = {name: '홍길동', age: 20};
let f2 = {name: '김길동', age: 21};
let f3 = {name: '박길동', age: 22};
let f4 = {name: '최길동', age: 23};
let myFriends = [f1, f2, f3, f4];

// 함수 friendListFnc를 만든다
function friendListFnc() {
    console.log('friendListFnc()');     // tr>td : 홍길동...

    let newName = document.querySelector('#name').value;    // id=name인 요소를 불러와 그 값을 리턴
    let newAge = document.querySelector('#age').value;      // id=age인 요소를 불러와 그 값을 리턴

    if (newName && newAge) {    // newName과 newAge이 빈 문자열('' or "")이 아니라면
        myFriends.push({name: newName, age: newAge});   // myFriends에 새로운 객체를 추가
    }

    let html = '<table border="2">';
    html += '<thead><tr><td>이름</td><td>나이</td></tr></thead>';
    html += '<tbody>';
    for (let i = 0; i < myFriends.length; i++) {
        html += "<tr><td>" + myFriends[i].name + "</td>";
        html += "<td>" + myFriends[i].age + "</td></tr>";
    }
    html += "</tbody>"
    html += "</table>"

    document.querySelector('#show').innerHTML = html;   // id=show인 요소 내부에 표를 셋팅
}

// 함수 friendListFnc를 실행한다
friendListFnc();