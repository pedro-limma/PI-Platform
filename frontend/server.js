require('dotenv/config')
const express = require('express')

const app = express()

const baseDir = `${__dirname}/build/`

app.use(express.static(`${baseDir}`))

app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }))

const port = process.env.REACT_APP_PORT || 4040;

app.listen(port, () => console.log(`Servidor subiu com sucesso em http://localhost:${port}`))
