const favorito = Number(prompt("What's your favourite number?"));

console.log(favorito)
console.log(typeof favorito)

if (favorito === 23) { // '23' == 23  -> TRUE //  '23' === 23 -> FALSE
    console.log('Cool! 23 is an amazing number!')
} else if(favorito === 7) {
    console.log('7 is also a cool number')
} else {
    console.log('Number is not 23 or 7')
}

if (favorito !== 23) {
    console.log('Why not 23?');
}