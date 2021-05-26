var readline = require('readline');
 
var rl = readline.createInterface(
     process.stdin, process.stdout);


rl.question('Enter no.? ', (num) => {
    let fact = 1;
    while (num>0){
        fact = fact*num;
        num = num-1;
    }

    console.log(fact);
    rl.close();
});