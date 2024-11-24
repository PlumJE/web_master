/** 햄스터에 관한 처리 **/
hampter.cooltime = 0;   // 햄스터의 뛰기 쿨타임
hampter.altitute = 600; // 햄스터의 고도. 아래쪽으로 갈수록 커진다.
hampter.vel = -50;      // 햄스터의 속도. 아래쪽으로 갈수록 커진다.
hampter.isspacepushed = false;  // 현재 스페이스바를 눌렀는지 여부

document.onkeydown = function(event) {
    // 함수를 실행할지 사전에 검열한다
    if (event.key != ' ' || event.repeat == true) {
        return;
    }

    // 인터벌 돌리기 이전 초기화 작업    
    hampter.isspacepushed = true;
    hampter.altitute = hampter.getBoundingClientRect().top - 20;
    hampter.vel = -50;

    // 인터벌 본체를 돌린다.
    let timerId = setInterval(function() {  // 다음 함수를 0.5초마다 반복실행
        hampter.isspacepushed = false;
        hampter.altitute += hampter.vel;
        hampter.vel += 5;
        hampter.style.top = `${hampter.altitute}px`;
        // console.log('햄프터의 현재 고도 :', hampter.getBoundingClientRect().top - 20);
        if (hampter.altitute > 600 || hampter.isspacepushed == true) {
            hampter.style.top = `600px`;
            clearInterval(timerId);
        }
    }, 10);
}

setInterval(function() {
    if (hampter.src == 'http://127.0.0.1:5500/img/%ED%96%84%EC%8A%A4%ED%84%B0_%ED%94%8C%EB%A0%88%EC%9D%B4%EC%96%B41.png') {
        hampter.src = 'http://127.0.0.1:5500/img/햄스터_플레이어2.png'
    }
    else {
        hampter.src = 'http://127.0.0.1:5500/img/햄스터_플레이어1.png'
    }
}, 100);


/** 해씨에 관한 처리 **/
function sendSeed(top, speed) {
    // 인터벌 돌리기 이전 초기화 작업
    let seed = document.createElement('img');
    seed.src = 'img/해씨.png';
    seed.style.position = 'absolute';
    seed.style.left = `1200px`;
    seed.style.top = `${top}px`;
    document.querySelector('main').appendChild(seed);

    let timerId = setInterval(function() {
        let left = parseInt(seed.getBoundingClientRect().left - 325)
        seed.style.left = `${left}px`;

        if (left < 0) {
            clearInterval(timerId);
            seed.remove();
        }
    }, speed);
}


/** 고양이에 관한 처리 **/
function sendCat(top, speed) {
    // 인터벌 돌리기 이전 초기화 작업
    let cat = document.createElement('img');
    cat.src = 'img/냥이.png';
    cat.style.position = 'absolute';
    cat.style.left = `1200px`;
    cat.style.top = `${top}px`;
    document.querySelector('main').appendChild(cat);

    let timerId = setInterval(function() {
        let left = parseInt(cat.getBoundingClientRect().left - 350)
        cat.style.left = `${left}px`;

        if (left < 0) {
            clearInterval(timerId);
            cat.remove();
        }
    }, speed);
}