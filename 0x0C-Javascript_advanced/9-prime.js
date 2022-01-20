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
countPrimeNumbers();
let time2 = performance.now();
console.log( "Execution time of printing countPrimeNumbers was " + (time2 - time1) + " milliseconds.");