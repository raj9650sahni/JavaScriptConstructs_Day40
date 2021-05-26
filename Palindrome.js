var read = require('readline-sync')
function Palindrome(n){
    let temp = n;
    let ans  = 0;
    let res = false;
    while (temp>=0){
        let p = n%10;
        ans =ans *10 + p;
        temp = Math.floor( temp/10);
    }
    
    if (n==ans){
        console.log("Plaindrome");
    }
    else{
       console.log("Not a Palindrome");
    }
}

var n= read.question('Enter the no ');
let palin = Palindrome(n);
console.log(palin);
