// ifCondition.js
// boolean => true, false

let isOK = true;
let age = 15;

console.log(isOK);
let result = isOK != "true"; // typeof result => boolean
result = 34 < 20;   // false

if (age >= 20) {    // if블럭.
    alert('성인입니다.');
}
else {  // else 블럭
    alert('미성년자입니다.');
}