var readline = require('readline');
 
var rl = readline.createInterface(
     process.stdin, process.stdout);


rl.question('Enter no.? ', (num) => {

        if (num==1){
            console.log("unit");
        }
        if (num==10){
            console.log("Ten");
        }
        if (num==100) {          
            console.log("Hundred");
        }

        if (num==1000){
            console.log("Thousand");
        }
       
       rl.close();
)};
