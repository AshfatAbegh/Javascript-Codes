var fibo=[0,1];
fibo[2]=fibo[2-1]+fibo[2-2];
for(var i=2; i<=10; i++){
    fibo[i]= fibo[i-1]+ fibo[i-2];
    console.log(fibo[i]);
}
console.log(fibo);

// function fibonacci(n){
//     var fibo = [0,1];
//     for(var i=2; i<=n; i++){
//         fibo[i]=fibo[i-1]+fibo[i-2];
//     }
//     return fibo;
// }

// var result = fibonacci(18);
// console.log(result);
