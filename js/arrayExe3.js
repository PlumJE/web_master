// arrayExe3.js
/*
    여러 줄 주석처리
    empAry => 사원중에서 성별이 여자이고 & 급여가 5000이상인 사람,
    => femaleAry에 저장.
*/

femaleAry = empAry.filter(
    (data) => (data.gender.toLowerCase() == "female" && data.salary > 5000)
);
console.log("Result is ", femaleAry);

// let friendAry = [
//     {name:"홍길동", age:20, weight:56.7},
//     {name:"김민기", age:21, weight:93.7},
//     {name:"박철순", age:22, weight:79.7},
//     {name:"이만수", age:23, weight:88.7}
// ]

// let temp = friendAry.filter((friend) => {
//     if (friend.weight > 60) {
//         console.log(friend);
//         return true;
//     }
//     else {
//         return false;
//     }
// });

// console.log(temp);