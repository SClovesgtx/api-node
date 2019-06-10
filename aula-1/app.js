
const express = require('express');
const app = express();

// criando rotas

// 1º endpoint GET
app.get('/', (req, res) => {
    let obj = req.query;
    return res.send({message: `Você enviou o nome ${obj.nome} com idade de ${obj.idade} anos!`});
});

// 1º endpoint POST
app.post('/', (req, res) =>{
    return res.send({message: 'Tudo ok com o método POST!'});
});



app.listen(3000)

module.exports = app;
