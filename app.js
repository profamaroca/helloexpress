// puxamos o módulo express para o nosso código
const express = require('express')

// pede o módulo para criar o objeto que representa o nosso app web
const app = express();

// configurar uma rota para requisição GET na raiz /
app.get('/', (req,res) => {
    console.log('chegou uma requisição get na raiz!')
    res.send('<h1> rota em construção! </h1>')
})

// configurar qual a view engine
app.set('view engine', 'ejs');
// configurar o diretório onde estão as nossas views/páginas/visualizações/frontend
app.set('views', './views');


// simulando um array de dados que pode ter vindo de um banco de dados mongoDB
var pessoasArray = [
    {
        'nome': 'Pedro',
        'idade': 12
    },
    {
        'nome': 'Mariana',
        'idade': 33,
    },
    {
        'nome': 'Bia',
        'idade': 25,
    },
]


// configurar uma rota para requisição GET na raiz /
app.get('/pessoas', (req,res) => {
    // renderiza a página/view pessoas, informando os dados que serão exibidos
    res.render('pessoas', {dados: pessoasArray});
})

// configurar uma rota para requisição GET no caminho /livros
// devolve uma resposta simples contendo um título
app.get('/livros', (req, res) => {
    res.send('<h1>Lista de livros cadastrados:</h1>');
    // buscar livros no nosso querido mongoDB

})

// app, por favor comece a ouvir/esperar requisições HTTP - PLAY!
app.listen(3000, () => {
    console.log("o servidor está rodando na porta 3000")
})

