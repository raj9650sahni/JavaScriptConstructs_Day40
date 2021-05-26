
var read = require('readline-sync')
var num = read.question('Enter the no.? ');
let ans = 1;
let res = 2**num;

let i =1;
while (ans<res && num<=256) {
    let p = 2**i;
    console.log(p);
    ans  = p;
    i+=1;

}