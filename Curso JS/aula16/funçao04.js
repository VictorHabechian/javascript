function fatorial(n) {
    var fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

let num = 5
console.log(`O fatorial de ${num} é ${fatorial(num)}`)