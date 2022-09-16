
// type conversion

const inputYear = '1991';

console.log(typeof inputYear);
console.log(Number(inputYear) + 18);
console.log(typeof Number(inputYear));

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion

console.log('I am ' + 23 + ' years old')

// string + number --> number converted to string
// não precisamos converter manualmente

console.log('23' - '10' - 3);

// operator -  faz com que as strings se convertam em numbers

console.log('23' + '10' + 3);

// operator +  faz com que os numbers se convertam em strings

console.log('23' * '2');
console.log('23' / '2');

// converte para number pois é a unica forma do operador(*) funcionar

let n = '1' + 1; // 11
n = n - 1;  // 11 - 1 = number = 10
console.log(n);

console.log(2+3+4+'5')

console.log('10' - '4' - '3' - 2 + '5')