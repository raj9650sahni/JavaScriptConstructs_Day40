
let num1 = Math.floor(Math.random()*(999-100+1)+100);
let num2 = Math.floor(Math.random()*(999-100+1)+100);
let num3 = Math.floor(Math.random()*(999-100+1)+100);
let num4 = Math.floor(Math.random()*(999-100+1)+100);
let num5 = Math.floor(Math.random()*(999-100+1)+100);
max =0
minNum = 0;
MaxNum = Number.MAX_VALUE;
min =- Number.MIN_VALUE;
for (let i  =1;i<=5;i++){
    if (num1>min){
        max= num1;

    }
    if (num2>max){
        max = num2;
    }
    if (num3>max){
        max = num3;
    }
    if (num4>max){
        max = num4;
    }
    if (num5>max){
        max = num5;
    }

    if (num1<MaxNum){
        minNum= num1;

    }
    if (num2<minNum){
        minNum = num2;
    }
    if (num3<minNum){
        minNum = num3;
    }
    if (num4<minNum){
        minNum = num4;
    }
    if (num5<minNum){
        minNum = num5;
    }
}
console.log(max);
console.log(minNum);

