function filtrar() {
    // valor que o usuario digitou
    let expressao = input_busca.value.toLowerCase()
    // pegando todas as linhas da tabela
    let linhas = tabela_contatos.getElementsByTagName('tr')

    for (posicao in linhas) {
        if (isNaN(posicao)) {
            continue;
        }
        let colunaNome = linhas[posicao].children[0].innerText.toLowerCase()
        let colunaTelefone = linhas[posicao].children[1].innerText.toLowerCase()
        let colunaEndereco = linhas[posicao].children[2].innerText.toLowerCase()
        let colunas = colunaNome + colunaTelefone + colunaEndereco;
        // let linha = linhas[posicao].innerText.toLowerCase()

        if (colunas.includes(expressao)) {
            linhas[posicao].style.display = "";
        } else {
            linhas[posicao].style.display = "none"
        }
    }

    
}