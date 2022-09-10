function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    var hora = 14

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#cccc66'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#cc9966'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#006699'
    }
}

