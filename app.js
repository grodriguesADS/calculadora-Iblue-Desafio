const express = require('express');
const app = express();
const router = require ('./routes/index')

app.use (
    express. urlencoded()
)

app.use(router);

app.listen(3000, () => {
    console.log("Servidor está funcionando na porta 3000")
})

