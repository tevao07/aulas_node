const express = require('express')
const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send("gosto da ex do gulherme!")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})