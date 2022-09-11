
// Recusividade

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
}
}

let num = 6
console.log(`O fatorial de ${num} é ${fatorial(num)}`)
