// object.js
// 객체

let ary = [];
let obj = {
    name: '홍길동',
    age: 20,
    height: 169.4
};
console.log("이름: " + obj.name + " 나이: " + obj['age']);
obj.age = 21;
console.log("이름: " + obj.name + " 나이: " + obj['age']);

// object타입에서 속성을 반환 반복문. for .. in 반복문
for (let prop in obj) {
    console.log(`prop => ${prop}, 값 => ${obj[prop]}`);
}

// 홍길동, 김민식, 최홍식.
ary.push(obj);  // 홍길동의 정보를 배열 추가.
ary.push({name: '김민식', age: 25, height: 190}); // 김민식의 정보를 배열 추가
ary.push({name: '최홍식', age: 28, height: 160}); // 최홍식의 정보를 배열 추가

let searchName = "김민식";
let searchAge = 25;
let sumHeight = 0;

// 평균키 => 
// 홍길동의 나이.
for (let i = 0; i < ary.length; i++) {  // i는 0부터 ary.length까지
    sumHeight += ary[i].height; // sumHeight에 ary의 i번째 객체의 height요소를 추가
    if (ary[i].name === searchName || ary[i].age >= searchAge) {    // 찾는 이름과 일치하거나 입력한 나이 이상이면
        console.log(`이름은 ${ary[i]['name']}, 나이는 ${ary[i].age}, 키는 ${ary[i]['height']}`);    // 출력한다
    }
}

console.log("평균키: " + Math.round(sumHeight / ary.length * 100) / 100);
// height의 평균을 구하고 그 값을 소수점 2째자리에서 반올림한다.