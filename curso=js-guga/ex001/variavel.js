
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark**2;
const BMIJohn = massJohn / heightJohn**2;

if (BMIJohn > BMIMark) {
    console.log(`O IMC do John ${BMIJohn.toFixed(2)} é maior do que o do Mark ${BMIMark.toFixed(2)}`)
} else {
    console.log(`O IMC do Mark ${BMIMark.toFixed(2)} é maior do que o do John ${BMIJohn.toFixed(2)}`)
}
