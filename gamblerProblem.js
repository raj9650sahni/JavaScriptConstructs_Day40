let won  =0;
let win_money = 200;
let loss_point =0;
let had_money = 100;
let bet_times = 0;
let win_times = 0;
while (had_money !=200 && had_money !=0) {
    let a = Math.floor(Math.random()*10)%2;
    bet_times += 1;
    if (a==1) {
        win_times += 1;
        had_money += 1;

    }
    if (a==0) {
        had_money -= 1;
        
    }
    
}
console.log("Times betted : " + bet_times);
console.log("Times won : " + win_times);