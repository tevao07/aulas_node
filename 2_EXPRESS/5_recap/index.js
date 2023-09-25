const express = require("express")

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send("Seja mau-vindo te odeio mano, vai embora daqui, xispa calabreso")
})

app.listen(3001, () => {
    console.log("servidor chato do cacete")
})