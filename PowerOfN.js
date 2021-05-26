var readline = require('readline');
 
var rl = readline.createInterface(
     process.stdin, process.stdout);


rl.question('Enter no.? ', (n) => {
console.log("n = "+n);
let power =1;
for(let i=0;i<n;i++){
    power = power*2;
    console.log(power);
}
rl.close();

});