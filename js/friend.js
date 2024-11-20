//friend.js
//this => 함수: window 객체, 이벤트 헨들러: 이벤트 대상, object: 객체자신
function makeRow(friendInfo = {name, phone, birth, bloudtype}) { //3개의 속성을 한번에
    //이름, 연락처, 생일. = tr 생성한 후 tr반환.
    let tr = document.createElement('tr');
    tr.onclick = function(e) { //this이벤트 받는 대상
        document.querySelector('input[name="friendName"]').value = this.children[1].innerHTML
        document.querySelector('input[name="friendPhone"]').value = this.children[2].innerHTML
        document.querySelector('input[name="friendBirth"]').value = this.children[3].innerHTML
        document.querySelector('select[name="friendBloodType"]').value = this.children[4].innerHTML
    }

    // <td><input type="checkbox"></td>
    let td = document.createElement('td')
    let button = document.createElement('input')
    button.setAttribute('type','checkbox')
    button.onclick = function(e) {
        e.stopPropagation()
    };
    button.onchange = function(e) {
        document.querySelectorAll('tbody input[type="checkbox"]').forEach(item => {
            if (!item.checked) {
                document.querySelectorAll('thead input[type="checkbox"]').checked = false;
            }
        })
    }
    td.appendChild(button)
    tr.appendChild(td)

    for (let prop in friendInfo) {
        let td = document.createElement('td'); //<tr><td></td></tr>
        let fname = friendInfo[prop];
        td.innerHTML = fname; //<td>홍길동</td>
        tr.appendChild(td);
    }
    
    //td 생성
    td = document.createElement('td');//td의 자식요소 들어갈 버튼 생성
    button = document.createElement('button'); //하나의 매개변수를 받는다.
    button.innerHTML = '삭제'; //이름 설정
    button.setAttribute('class', 'btn btn-primary'); //태그에 attribute를 추가
    button.addEventListener('click', (e) => { //삭제버튼에 클릭이벤트 등록.
        e.stopPropagation()
        e.target.parentElement  //버튼 타겟을 감싸고 있는 td
        .parentElement.remove() //그 상위요소 tr테그
    }, false/*버블링*/) // 3번째 매개값의 의미 : bubbling, capturing 선택.
    td.appendChild(button);
    tr.appendChild(td);
    
    return tr;
}


//data.js
//배열을 활용해서 친구목록 출력
let = friendList.forEach((friend) => document.querySelector('#list').appendChild(makeRow(friend)));


//추가 버튼에 이벤트
//1번째
document.querySelector('button.btn.btn-primary').onclick = function(event) {
    let fname = document.querySelector('input[name="friendName"]').value;
    let fphone = document.querySelector('input[name="friendPhone"]').value;
    let fbirth = document.querySelector('input[name="friendBirth"]').value;
    let fbloudtype = document.querySelector('select[name="friendBloodType"]').value;
    if (!fname || !fphone || !fbirth) { //!let이라는 변수 대신 사용
        alert('필수값을 입력하세요.');
        return;
    }
    let param = {
        name: fname,
        phone: fphone,
        birth: fbirth,
        BloudType: fbloudtype
    }

    let tr = makeRow(param); //매개변수: param
    document.querySelector('#list').appendChild(tr);
};


//수정버튼에 이벤트
document.querySelector('button.btn.btn-warning').onclick = function(e) {
    let name = document.querySelector('input[name="friendName"]').value;
    let phone = document.querySelector('input[name="friendPhone"]').value;
    let birth = document.querySelector('input[name="friendBirth"]').value;
    let bloodtype = document.querySelector('select[name="friendBloodType"]').value;
    document.querySelectorAll('#list tr').forEach(item => {
        if (item.children[1].innerText == name) {
            item.children[2].innerText = phone;
            item.children[3].innerText = birth;
            item.children[4].innerText = bloodtype;
        }
    })
};


//선택삭제 이벤트
document.querySelector('button.btn.btn-danger').onclick = function(e) {
    document.querySelectorAll('#list tr').forEach((item) => {
        let items_checkbox = item.children[0].children[0];
        if(items_checkbox.checked) {
            item.remove();
        }
    });
};


//전체선택 하는 이벤트 만들기
document.querySelector('thead input[type="checkbox"]').onchange = function(event) {
    console.log(event.target.checked); // input:checkbox => checked 속성.
    // 대상 변경: tbody input[type="checkbox"]
    document.querySelectorAll('tbody input[type="checkbox"]').forEach(item => {
        item.checked = event.target.checked;
    });
};


// 정보저장 버튼 누르면 친구의 정보를 localStorage에 저장.
document.querySelector('button.btn.btn-info').onclick = function(event) {
    let ary = [];
    document.querySelectorAll('#list tr').forEach(item => {
        console.log(item);
        let name = item.children[1].innerHTML;  // 이름
        let phone = item.children[2].innerHTML; // 연락처
        let birth = item.children[3].innerHTML; // 생일
        let btype = item.children[4].innerHTML; // 혈액형
        ary.push({name, phone, birth, btype});
    });
    let json = JSON.stringify(ary);
    localStorage.setItem('friendList', json);
    console.log(localStorage);
    console.log(JSON.parse(localStorage.getItem('friendList')));
}