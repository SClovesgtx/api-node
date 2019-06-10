const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send({message: 'Tudo ok com o método GET da rota de usuários!'});
});

router.post('/', (req, res) => {
    return res.send({message: 'Tudo ok com o método POST da rota de usuários!'});
});

router.post('/create', (req, res) => {
  return res.send({message: 'Seu usuário foi criado =)'});
});

module.exports = router;


// url mongo: mongodb+srv://user_admin:<password>@clusterapi-aymkr.mongodb.net/test?retryWrites=true&w=majority
