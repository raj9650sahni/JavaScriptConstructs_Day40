var read = require('readline-sync')
var num = read.question('Enter the no.? ');
for (let i = 2;i*i<=num;i++){
    console.log(i);
}
