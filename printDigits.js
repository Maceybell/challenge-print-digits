function printDigits(num){
    let rev = 0
    let lastDigit;
    while(num != 0){
        lastDigit = num % 10
        rev = rev * 10 + lastDigit
        num = Math.floor(num/10)
    }
    console.log(rev)
}

printDigits(74362)
printDigits(78345273270349)
printDigits(5432123456789)

console.log(73645 % 10)
console.log(0 * 10 + 5)
console.log(Math.floor(73645/10))
printDigits(560235)