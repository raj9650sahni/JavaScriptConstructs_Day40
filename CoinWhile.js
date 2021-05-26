
let head = 1;
let tail = 0;
headTimes = 0;
tailTimes= 0;
while (tailTimes !=11 && headTimes !=11){
    let n = Math.floor(Math.random() * 10)%2;
    if (n==head){
        headTimes +=1;
    }
    if (n==tail){
        tailTimes +=1;
    }
}
console.log("head " + headTimes + "  times");
console.log("tail " + tailTimes + " times");