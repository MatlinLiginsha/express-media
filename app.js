const express = require('express')
const app = express()
const PORT = 3500

app.get('/', (request,response) => {
    response.status(200).send({message : "Its Running!!!"})
})

app.listen(PORT, () => console.log(`server started executing at http://localhost:${PORT}/`))