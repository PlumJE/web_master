/** 게임 전체적 처리 **/
const hampterimg1 = './img/%ED%96%84%EC%8A%A4%ED%84%B0_%ED%94%8C%EB%A0%88%EC%9D%B4%EC%96%B41.png';
const hampterimg2 = './img/%ED%96%84%EC%8A%A4%ED%84%B0_%ED%94%8C%EB%A0%88%EC%9D%B4%EC%96%B42.png';
const jumpsound = new Audio('./mp3/jump.mp3');
const scoresound = new Audio('./mp3/score.mp3');
let score = 0;
let cooltime = 0;
let summoninterval = 2000;
let collisionDetect = function(a, b) {
    a = a.getBoundingClientRect();
    b = b.getBoundingClientRect();

    if (a.left > b.right) {
        return false;
    }
    if (a.right < b.left) {
        return false;
    }
    if (a.top > b.bottom) {
        return false;
    }
    if (a.bottom < b.top) {
        return false;
    }
    return true;
}

let getscore = function() {
    score++;
    scoresound.play();
    scoreboard.innerText = `점수 : ${score}`;
    if (summoninterval > 100) {
        summoninterval -= 10;
    }
}

let gameover = function() {
    localStorage.score = JSON.stringify(score);
    alert('게임오버!');
    location.href = "gameEnd.html";
}

let gamerunning = setInterval(function() {
    let random_altitude = parseInt(Math.random() * 500 + 100);

    if (Math.random() < 0.5) {
        sendSeed(random_altitude, 10);
    }
    else {
        sendCat(random_altitude, 10);
    }
}, summoninterval);

document.onkeydown = function(event) {
    if (event.key == ' ' && event.repeat == false) {
        hampter.jump();
    }
}

document.querySelector('div.container').onclick = function(event) {
    if (cooltime <= event.timeStamp) {
        cooltime = event.timeStamp + 200;
        hampter.jump();
    }
}


/** 햄스터에 관한 처리 **/
hampter.cooltime = 0;   // 햄스터의 뛰기 쿨타임
hampter.altitute = 600; // 햄스터의 고도. 아래쪽으로 갈수록 커진다.
hampter.vel = -50;      // 햄스터의 속도. 아래쪽으로 갈수록 커진다.
hampter.isspacepushed = false;  // 현재 스페이스바를 눌렀는지 여부

hampter.jump = function(event) {
    // 인터벌 돌리기 이전 초기화 작업    
    hampter.isspacepushed = true;
    hampter.altitute = hampter.getBoundingClientRect().top - 20;
    hampter.vel = -50;
    jumpsound.play();

    // 인터벌 본체를 돌린다.
    let timerId = setInterval(function() {  // 다음 함수를 0.5초마다 반복실행
        hampter.isspacepushed = false;
        hampter.altitute += hampter.vel;
        hampter.vel += 5;
        hampter.style.top = `${hampter.altitute}px`;

        if (hampter.altitute > 600 || hampter.isspacepushed == true) {
            hampter.style.top = `600px`;
            clearInterval(timerId);
        }
    }, 50);
}

setInterval(function() {
    if (hampter.getAttribute('src') == hampterimg1) {
        hampter.src = hampterimg2;
    }
    else {
        hampter.src = hampterimg1;
    }
}, 100);


/** 해씨에 관한 처리 **/
function sendSeed(top, speed) {
    // 인터벌 돌리기 이전 초기화 작업
    let seed = document.createElement('img');
    let left = 1200;

    seed.src = 'img/해씨.png';
    seed.style.position = 'absolute';
    seed.style.left = `${left}px`;
    seed.style.top = `${top}px`;
    document.querySelector('main').appendChild(seed);

    let timerId = setInterval(function() {
        left -= 10;
        seed.style.left = `${left}px`;

        if (collisionDetect(seed, hampter)) {
            clearInterval(timerId);
            seed.remove();
            getscore();
        }
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
    let left = 1200;

    cat.src = 'img/냥이.png';
    cat.style.position = 'absolute';
    cat.style.left = `${left}px`;
    cat.style.top = `${top}px`;
    document.querySelector('main').appendChild(cat);

    let timerId = setInterval(function() {
        left -= 10;
        cat.style.left = `${left}px`;

        if (collisionDetect(cat, hampter)) {
            clearInterval(timerId);
            cat.remove();
            gameover();
        }
        if (left < 0) {
            clearInterval(timerId);
            cat.remove();
        }
    }, speed);
}

console.log(hampter.src);
console.log(jumpsound.src);