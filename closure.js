function stopWatch(){
    let counter = 0;
    return function(){
        counter ++;
        return counter;
    }
};
let clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
let clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
let clock3 = stopWatch();
console.log(clock3());
console.log(clock3());