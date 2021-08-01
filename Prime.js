function isPrime(n){
    for(i=2; i<n; i++){
       if(n%i == 0){
        return('not a prime number');
           
        }
   }
   return("Your number is a prime number");
}

var result=isPrime(139);
console.log('Result :',result);