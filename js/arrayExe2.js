// arrayExe2.js

let dupAry = ['홍길동', '김민혁', '정동숙', '홍길동', '홍길도', '김민', '홍길동', '김민혁', '김민'];

let newAry = dupAry.filter(function(value, index, array) {
    if (array.indexOf(value) == index) {
        return true;
    }
    else {
        return false;
    }
});

console.log(newAry); // ['홍길동', '김민혁', '장동숙', '홍길도', '김민']
