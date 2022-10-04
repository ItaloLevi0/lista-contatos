const API_URL = 'http://localhost:8000';

function buscarParaEditar(id) {
    fetch(API_URL+'/contatos/'+id)
        .then(res => res.json())
        .then(dados => {
            input_editar_id.value = dados.id;
            input_editar_nome.value = dados.nome;
            input_editar_telefone.value = dados.telefone;
            input_editar_endereco.value = dados.endereco;
        })
}

function editar(){
    event.preventDefault();

    let dados = {
        nome: input_editar_nome.value,
        telefone: input_editar_telefone.value,
        endereco: input_editar_endereco.value
    }

    fetch(API_URL+'/contatos/'+ input_editar_id.value, {
        method: 'PATCH',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(resposta => resposta.json())
        .then(resposta => atualizarLista())
}

function inserir() {
    
    event.preventDefault();

    let dados = {
        nome: input_nome.value,
        telefone: input_telefone.value,
        endereco:input_endereco.value
    };


    fetch(API_URL+'/contatos', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(resposta => resposta.json())
        .then(resposta => atualizarLista())

        form_add.reset();
}



async function excluir(id){
    let resposta = confirm('Você tem certeza?')

    if (resposta !== true) {
        return;
    }

    await fetch(API_URL + '/contatos/' + id, {
        method:'DELETE'
    })
    atualizarLista()
}

function atualizarLista(){
    tabela_contatos.innerHTML= '';

    fetch(API_URL  + '/contatos')
        .then(function (resposta){
            return resposta.json()
        })
        .then(function (lista) {
            lista.forEach(function(cadaItem){
                tabela_contatos.innerHTML += `
                <tr>
                    <td>${cadaItem.nome}</td>
                    <td>${cadaItem.telefone}</td>
                    <td>${cadaItem.endereco}</td>
                    <td>
                    <button onclick="buscarParaEditar(${cadaItem.id})" data-bs-toggle="offcanvas" data-bs-target="#offcanvasEditar" class="btn btn-warning btn-sm">Editar</button>
                    <button onclick="excluir(${cadaItem.id})" class="btn btn-danger btn-sm">Excluir</button>
                    </td>
                </tr>`
            })
        })
}

atualizarLista()



