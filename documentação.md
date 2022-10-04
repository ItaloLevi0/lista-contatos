# PARA EXECUTAR O PROJETO


## Baixe o node.js

acesse **https://nodejs.org/**, baixe e instale o node.js no seu computador. Com o programa instalado siga para o próximo passo.

## Instale o json-server
Execute no terminal o comando `npm install -g json-server`.

## Ative o json-server
No terminal, na pasta da aplicação execute o comando `npx json-server db.json --port 8000`.

Com isso você terá acesso a uma API REST no endereço **http://localhost:8000**.

Se quiser usar uma porta diferente terá que acessar o arquivo `eventos.js` e alterar o valor de `API_URL` para a porta que vai ser usada.

Agora basta abrir o arquivo **index.html** no seu navegador.