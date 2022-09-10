function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verfique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','homem_criança.png')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src','homem_jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src','homem_adulto.png')
            } else {
                img.setAttribute('src','homem_velho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','mulher_criança.png')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src','mulher _jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src','mulher_adulta.png')
            } else {
                img.setAttribute('src','mulher_velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
    }
}