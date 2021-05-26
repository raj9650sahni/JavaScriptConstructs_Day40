var readline = require('readline');
 
var rl = readline.createInterface(
     process.stdin, process.stdout);


rl.question('Enter single digit no.? ', (num) => {

        if (num==1){
            console.log("one");}
       
        if ( num==2){
             console.log("Two");
        }
        if (num==3) {
            console.log("Three");
            
        }
        if (num==4) {
            console.log("Four");
            
        } 
        if (num==5) {
            console.log("Five");
            
        }
        if (num==6) {
            console.log("Six");
            
        }
        if (num==7){
            console.log("Seven");

        }
        if (num==8){
            console.log("Eight");

        }
        if (num==9){
            console.log("Nine");

        } 

        }
        rl.close();
      
});