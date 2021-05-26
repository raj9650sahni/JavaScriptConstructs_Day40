var readline = require('readline');
 
var rl = readline.createInterface(
     process.stdin, process.stdout);


rl.question('Enter no.? ', (num) => {
    console.log("n= "+num);
    let harmonicNum = 0;
    for(let n=1;n<=num;n++){
        harmonicNum = harmonicNum + 1/n;
    }
    console.log("Harmonic Number: "+harmonicNum);
rl.close();
});