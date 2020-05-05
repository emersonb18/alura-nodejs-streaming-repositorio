const fs = require('fs')
const path = require('path')

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {

    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1
    console.log('tipo eh valido: ' + tipoEhValido)
    if(!tipoEhValido) {
        const erro = 'Tipo é inválido'
        console.log('erro tipo invalido')
        callbackImagemCriada(erro)
    }
    else {
        
        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`

        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(`./assets/imagens/${nomeDoArquivo}`))
            .on('finish', () => callbackImagemCriada(false, novoCaminho) )
    }

}
