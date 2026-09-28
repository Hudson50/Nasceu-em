function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) >= ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.width = 250;
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 1 && idade <= 10 || idade >= 2024 || idade >= 2014) {
                //criança
                genero = 'Criança masculino'
                img.setAttribute('src', 'imagens/bebe-menino.png')
            } else if (idade <= 20 || idade >= 2004) {
                //jovem
                img.setAttribute('src', 'imagens/adolecente-homem.png')
            } else if (idade <= 50 || idade >= 1974){
                //adulto
                img.setAttribute('src', 'imagens/homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 1 && idade <= 10 || idade >= 2023 || idade >= 2014) {
                genero = 'Criança femenina'
                img.setAttribute('src', 'imagens/bebe-menina.png')
            } else if (idade <= 20 || idade >= 2004) {
                img.setAttribute('src', 'imagens/adolecente-mulher.png')
            } else if (idade <= 50 || idade >= 1974) {
                img.setAttribute('src', 'imagens/mulher.png')
            } else {
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        if (idade < 150) {
            res.innerHTML = `Detectamos ${genero} com ${idade} ano de idade `
        } else {
            res.innerHTML = `Detectamos ${genero} que nasceu em ${idade}`
        }
        res.appendChild(img)
    }
}