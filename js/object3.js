// object3.js

let person = {
    name: "박민수",         // 
    birth: "2000-04-05",
    bloodType: 'A',
    showInfo: function() { // 객체에 속성이 된 함수 = 메소드
        console.log(`이름은 ${this.name}이고, 생년월일은 ${this.birth}입니다.`);
    }
}

person.showInfo();

Math.round(12.5);   // 메소드 실행. 13
Math.random();  // 0이상 1미만 임의의 실수.

for (let i = 1; i <= 5; i++) {
    console.log(parseInt(Math.random() * 10 + 1));
}

// 반복문(for, while)
let i = 0;
while (i < 5) {
    console.log('i의 값은 ' + i);
    i++;
}

// 어떤 조건을 만족할 동안에만 반복을 실행하도록.(부정반복)
i = 0;  // i를 0으로 초기화
while (parseInt(Math.random() * 10 + 1) != 5) { // 랜덤수가 5가 아닌 동안
    console.log(i++);   // i를 출력하고, i를 1 증가시킨다.
}

// 임의의 문자를 입력 => 콘솔 : 당신이 입력한 문자는 ??? 입니다.
let str = '';   // str을 ''으로 초기화
while ((str = prompt('')) != '종료') {  // str이 '종료'가 아닌 동안
    console.log(`당신이 입력한 문자는 ${str} 입니다.`); // str을 출력
}