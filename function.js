// math 1
function addNumbers(x,y){
    let result1 = x + y;
    return result1;
}
console.log("sum of two numbers: " + addNumbers(50,70));

// math 2
function sumUpToN(n){
let sum = 0;
for (let i =1; i<=n;i++){
sum = sum + i;
}
return sum;
}
console.log("sum of all 1 to n numbers:" + sumUpToN(10));

// math 3
let array =[15,20,25,35,40];
function sumArray(a){
    let sum1 =0;
    for(let i =0;i<a.length;i++){
        sum1 = sum1 + a[i];
    }$
    return sum1;
}
console.log("sum of all the numbers in the array:" + sumArray(array));

// math 4
let array1 =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function countEvenNumbers(b){
    let count =0;
    for(let i=0; i<b.length;i++){
        if(b[i] % 2 ===0){
           count++;
        }
    }
    return count;
}
console.log("count of even numbers in the array:" + countEvenNumbers(array1));

// math 5
function stringLength(studentsName){
    let length = studentsName.length;
    return length;
}
console.log("the length of the string:" + stringLength("munia,mubrura,muntazim"));