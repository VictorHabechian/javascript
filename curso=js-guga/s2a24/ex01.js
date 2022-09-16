const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 81;

const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 86;

const avarageDolphins = (dolphinsScore1+dolphinsScore2+dolphinsScore3)/3;

const avarageKoalas = (koalasScore1+koalasScore2+koalasScore3)/3;

console.log(avarageDolphins);
console.log(avarageKoalas);

if (avarageDolphins > avarageKoalas && avarageDolphins >= 100) {
    console.log('Os Dolphins venceram!')
} else if (avarageKoalas > avarageDolphins && avarageKoalas >= 100) {
    console.log('Os Koalas venceram!')
} else if (avarageDolphins === avarageKoalas && avarageDolphins >= 100 && avarageKoalas >= 100) {
    console.log('EMPATOU!')
} else {
    console.log('Os pontos adquiridos pelos participantes não foram suficientes!')
}
