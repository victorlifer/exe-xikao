const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser');


const appUser = express()
const PORT = process.env.PORT || 3000

appUser.use(bodyParser.json());


appUser.get("/usuarios", async (req, res) => {
    try {
        const response = await axios.put(`https://reqres.in/api/users/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(400).json({ error: "Usuario nao foi encontrado" })
    }
});


appUser.get("/usuario/id:", async (req, res) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${req.params.id}`);
        res.json(response.data)
    } catch (error) {
        res.status(400).json({ error: 'Erro ao buscar usuários' })
    }
})

app.post('/usuario', async (req, res) => {
    try {
        const response = await axios.post('https://reqres.in/api/users', req.body);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
})

app.put('/usuario/:id', async (req, res) => {
    try {
        const response = await axios.put(`https://reqres.in/api/users/${req.params.id}`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(400).json({ error: 'Usuário não encontrado' });
    }
})

app.delete('/usuarios/:id', async (req, res) => {
    try {
        await axios.delete(`https://reqres.in/api/users/${req.params.id}`);
        res.json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        res.status(400).json({ error: 'Usuário não encontrado' });
    }
})


// inicialização do servidor

appUser.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})