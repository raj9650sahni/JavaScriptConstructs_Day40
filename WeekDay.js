var readline = require('readline');
 
var rl = readline.createInterface(
     process.stdin, process.stdout);


rl.question('Enter no.? ', (num) => {
    switch (num) {
        case "1":
            console.log("MonDay");
            break;
        case "2":
             console.log("Tuesday");
             break;
        case "3":
            console.log("Wednesday");
            break;
        case "4":
            console.log("ThrusDay");
            break;
        case "5":
            console.log("Friday");
            break;
        case "6":
            console.log("SaturDay");
            break;

        case "7":
            console.log("SunDay");
            break;

       default:
           console.log("invalid no.")
    }

    rl.close();
  
      
});