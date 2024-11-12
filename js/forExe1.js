// forExe1.js

document.write('<table border="2">');
for (let j = 2; j <= 9; j++) {  // j = 2,3,4,5,6,7,8,9
    var num = j;
    for (var i = 1; i <= 9; i++) {  // i = 1,2,3,4,5,6,7,8,9
        if (i % 2 == 1) {   // 홀수
            document.write(`<tr style="background: pink; color: white;"><td> ${num} * ${i} </td><td> = </td><td> ${num * i} </td></tr>`);
        }
        else {  // 짝수
            document.write(`<tr style="background: cyan;"><td> ${num} * ${i} </td><td> = </td><td> ${num * i} </td></tr>`)
        }
    }   // end of for(let i=1...)
}   // end of for(let j=2...)
document.write('</table>');