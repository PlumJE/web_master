// event.js

console.dir(document);
// document.onclick = function() {
//     alert('클릭했습니다.');
//     document.location.href = 'https://www.daum.net';
// }

// click하면 매개변수값으로 넘긴 함수를 실행하도록 추가한다.
document.querySelector('#showBtn').addEventListener('click', function() {
    // console.log('버튼 클릭!');
    document.querySelector('#desc').style.display = 'block';
});

document.querySelector('#hideBtn').onclick =  function() {
    document.querySelector('#desc').style.display = 'none';
};

// 이미지에 이벤트 등록.
document.querySelector('img').addEventListener('mouseover', function() {
    document.querySelector('#desc').style.display = 'block';
})

document.querySelector('img').addEventListener('mouseout', function() {
    document.querySelector('#desc').style.display = 'none';
})

// 이미지 변경하기.
let imgAry = ['레드향.jpg', '이미지.jpg', '다른이미지.jpg', '어떤이미지.jpg'];
let idx = 1;
document.querySelector('#changeImg').onclick = function() {
    if (idx > 3) {
        idx = 0;
    }
    let imageName = imgAry[idx++];
    document.querySelector('img').src = "image/" + imageName;
    document.querySelector('img').width = 650;
}
