// 초기화
const tutorialpages = 3;
let tutorialpage = 1;

if (!'scorelist' in localStorage) {
    localStorage.scorelist = JSON.stringify([{name:'이지응', pswd:'dlwldmd', score:0}]);
}


startbutton.onclick = function(event) {
    titleGUI.style.display = "none";
    tutorialGUI.style.display = "block";
}

prevbutton.onclick = function(event) {
    changeTutorial(-1);
}

nextbutton.onclick = function(event) {
    changeTutorial(1);
}

startbutton2.onclick = function(event) {
    location.href = "gameMain.html";
}


function changeTutorial(changeamount) {
    if (changeamount > 0 && tutorialpage < tutorialpages) {
        tutorialpage += changeamount;
    }
    else if (changeamount < 0 && tutorialpage > 1) {
        tutorialpage += changeamount;
    }
    else {
        return;
    }

    tutorialGUI.querySelector('img.card-img-top').src = `img/튜토리얼_${tutorialpage}.jpg`;
    if (tutorialpage == tutorialpages) {
        startbutton2.style.display = 'inline';
    }
    else {
        startbutton2.style.display = 'none';
    }
}