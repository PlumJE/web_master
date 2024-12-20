// 초기 행동
document.querySelectorAll('p.card-text').forEach(item => {
    item.innerText = "당신의 점수는 : " + localStorage.score;
});


// scorelist 화면으로 넘어간다
goto_scorelistGUI.onclick = function(event) {
    let name = nameinput.value;
    let pswd = pswdinput.value;
    
    if (name && pswd) {
        let newscore = JSON.parse(localStorage.score);
        if (write_scorelist(name, pswd, newscore) == false) {
            alert("기록을 등록하기 위한 비밀번호가 틀렸습니다.");
            return;
        }
    }
    else {
        if (!confirm("정말 기록등재 및 갱신 안하고 넘어가실래요?")) {
            return;
        }
    }

    scoringGUI.style.display = "none";
    scorelistGUI.style.display = "block";
    read_scorelist();
};

document.querySelectorAll('button.restart').forEach(button => {
    button.onclick = function(event) {
        location.href = "index.html";
    }
});


// scorelist에 정보를 쓴다
function write_scorelist(name, pswd, score) {
    let scorelist = JSON.parse(localStorage.scorelist);
    let index = scorelist.findIndex(scoreinfo => scoreinfo.name == name);

    if (index == -1) {
        scorelist.push({name: name, pswd: pswd, score, score});
    }
    else if (scorelist[index].pswd != pswd) {
        return false;
    }
    else if (scorelist[index].score < score) {
        scorelist[index].score = score;
    }
    localStorage.scorelist = JSON.stringify(scorelist);
    return true;
}


// score에서 정보를 읽어 화면에 표시한다
function read_scorelist() {
    let rank = 1;
    JSON.parse(localStorage.scorelist).sort((a, b) => (b.score - a.score)).forEach(scoreinfo => {
        let tr = document.createElement('tr');

        let ranktd = `<td>${rank}</td>`;
        let nametd = `<td>${scoreinfo.name}</td>`;
        let scoretd = `<td>${scoreinfo.score}</td>`;

        tr.innerHTML = ranktd + nametd + scoretd;
        scorelisttable.appendChild(tr);

        rank++;
    });
}