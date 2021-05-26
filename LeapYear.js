
var readline = require('readline');
 
var rl = readline.createInterface(
     process.stdin, process.stdout);


rl.question('What is your year? ', (year) => {
      if (year%400 ==0){
          console.log("year " + age + " is a leap year");
     }
     if (year%100 ==0){
          console.log("it is not ba leap year");
     }
     if (year%4==0){
          console.log("it is a leap Year");
     } else{
          console.log("it is not a leap Year");
     }
    
     rl.close();  
     });
     
