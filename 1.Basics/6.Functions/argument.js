function sum(){
    let total = 0;
    for (const iterator of arguments) {
        total += iterator;
    }
    return total;
}
console.log(sum(1,2,3,4,6,7,8));