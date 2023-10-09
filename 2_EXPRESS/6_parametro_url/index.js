const express = require("express")
const app = express()

const path = require("path")

const caminho = path.join(__dirname, "templates")

app.get('/usuarios/:id', (requisicao, resposta) => {
    const id = requisicao.params.id

    console.log(`Quero fazer ${id}`)
    
    resposta.sendFile(`${caminho}/usuarios.html`)
    
})

app.get("/", (requisicao, resposta) => {
    resposta.sendFile(`${caminho}/index.html`)
})

app.listen(3001, () => {
    console.log("servidor rodando no rodeio que rodeia o rodeado que é roedor do rodo radiador roubado")
})