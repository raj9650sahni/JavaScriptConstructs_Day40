const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

var read = require('readline-sync')

readline.question('Enter Num :', Num=> {
    switch (Num) {
        case "1":
            let feet = read.question('Enter feet? ');
            console.log(feet*12);

            break;
    
        case "2":
            let inch = read.question('Enter inch? ');
            console.log(inch/12);
            break;
        case "3":
            let feet1 = read.question('Enter feet? ');
            console.log(feet1 * 0.3048);
            break;

        case "4":
            let Meter = read.question('Enter Meter? ');
                console.log(Meter /0.3048);
            break;
        default:
            console("Invalid no.");
    }

    readline.close();

});

   

 





