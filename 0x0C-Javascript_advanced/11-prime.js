function countPrimeNumbers(){
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        let prime = true;
        
        for (let j = 2; j <= i; j++) {
            if (i % j == 0) {
                prime = false;
                break;
            }
        }
        
        if (prime) {
            count++;
        }
    }
    return count;
}

let time1 = performance.now();
function execute(){
  for (let i = 0; i < 100; i++) {
        countPrimeNumbers();
    }
}
setTimeout(function(){execute()}, 0);

let time2 = performance.now();
console.log("Execution time of calculating prime numbers 100 times was " + (time2 - time1) + " milliseconds.")