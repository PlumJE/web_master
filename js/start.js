// start.js
// Document Object Model -> DOM, Object(객체) 속성, 기능
//                                  사람 : 키, 몸무게, 시력(속성) => 필드
//                                         먹는다, 뛴다, 잔다(기능) => 함수

let show = document.querySelector('#show'); // <div id="show">
show.innerHTML = '<b>Hello, world!</b><button onclick="deleteFunc()">삭제</button>';

show.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'red';
})

console.log(show);

function deleteFunc() {
    alert('삭제버튼을 클릭했습니다.');
}