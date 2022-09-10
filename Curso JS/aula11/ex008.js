var vel = 110
var lim = 100
console.log(`A velocidade do seu carro é ${vel}Km/h`)
if (vel > lim) { // condição simples
    console.log(`Você ultrapassou o limite de velocidade. MULTADO!`)
} else if (vel < lim/2) {
    console.log(`Você está abaixo do limite mínimo de velocidade. MULTADO!`)
}
console.log(`Dirija sempre usando cinto de segurança! `)