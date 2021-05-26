let a = 10;
let b = 20;
let c = 30;
let first = a+b*c;
let sec = c + a/b;
let third = a%b+c;
let fourth = a*b + c;
max =0
minNum = 0;
MaxNum = Number.MAX_VALUE;
min =- Number.MIN_VALUE;
for (let i  =1;i<=4;i++){
    if (first>min){
        max= first;

    }
    if (sec>max){
        max = sec;
    }
    if (third>max){
        max = third;
    }
    if (fourth>max){
        max = fourth;
    }

    if (first<MaxNum){
        minNum= first;

    }
    if (sec<minNum){
        minNum = sec;
    }
    if (third<minNum){
        minNum = third;
    }
    if (fourth<minNum){
        minNum = fourth;
    }
 
}
console.log(max);
console.log(minNum);
