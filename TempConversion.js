function tempF(degC){
    let F = (degC* 9/5) + 32;
    return F;
}

function tempC(degF){
    let C = (degF - 32)*5/9;
    return C;
}

var read = require('readline-sync')
console.log("Enter 1 for farhen to celcius conversion");
console.log("Enter 2 for celcius to farhen conversion")
var num = read.question('Enter the no.? ');
switch (num) {
    case "1":
        var far = read.question('Enter the temp in Farhenheit? ');
        let celcius = tempC(far);
        console.log(celcius);
        break;
    case "2":
        var cel = read.question('Enter the temp in celcius? ');
        let Farhenheit = tempF(cel);
        console.log(Farhenheit);

    default:
        console.log("invalifd no.")
        
}