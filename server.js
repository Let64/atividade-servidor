import express from 'express'

const app = express()
const porta = 3000

app.get('/',(req, res) =>  {
    res.send('Seja bem-vindo(a) a Central de informações da Escola Senai')
});

app.get('/status',(req, res) =>  {
    res.json({status: 'online', sprint: 1});
});

app.get('/escola - informações da instituição',(req, res) =>  {
    res.send({
        "nome": "Escola Técnica",
        "cidade": "São Paulo",
        "tipo": "Ensino Técnico"
    });
});

app.get('/cursos',(req, res) =>  {
    res.send([
        { "id": 1, "nome": "Desenvolvimento de Sistemas"},
        { "id": 2, "nome": "Redes de Computadores"},
        {"id": 3, "nome": "Administração"}
    ])
});

app.get('/professor',(req, res) =>  {
    res.send({
        nome: "Helena",
        disciplina: "Programação Back-end"
    });
});

app.get('/ajuda',(req, res) =>  {
   const orientacoes = `
   Rotas disponiveis no sistema:
    - GET/ :Página inicial com mensagem de boas vindas,
    - GET/STATUS "Verificar se o servidor está online,
    - GET/escolaRetorna os dados da organização(Nome, Cidade,tipo),
    - GET/cursos "Reotrna os cursos disponíveis",
    - GET/professor Mostra o nome do professor e sua disciplina,
    - GET/ajuda Retorna um texto explicando as rotas do sistema`
    res.send(orientacoes)
});

app.get('/requisicao', (req, res) => {
    res.json({
        metodo: req.method, 
        caminho:req.path,
        mensagem:"Solicitação recebida com sucesso!"
    });
});
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})