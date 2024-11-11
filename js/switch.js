// switchCondition.js

let grade = prompt("학점을 입력하세요.");

switch (grade) {
    case 'A':
        document.write('90 ~ 100 사이의 점수');
        break;
    case 'B':
        document.write('80 ~ 89 사이의 점수');
        break;
    case 'C':
        document.write('70 ~ 79 사이의 점수');
        break;
    case 'D':
        document.write('60 ~ 69 사이의 점수');
        break;
    case 'F':
        document.write('60 미만의 점수');
        break;
    default:
        document.write('잘못된 입력');
}