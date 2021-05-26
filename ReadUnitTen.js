var readline = require('readline');
 
var rl = readline.createInterface(
     process.stdin, process.stdout);


rl.question('Enter no.? ', (num) => {

    switch (num) {
        case "1":
            console.log("unit");
            break;
        case "10":
            console.log("Ten");
            break;
        case "100":
            console.log("Hundred");
            break;

        case "1000":
            console.log("Thousand");
            break;
        default:
            console.log("invalid no");
}
rl.close();

});