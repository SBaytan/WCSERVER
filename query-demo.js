//Name: Baytan Shem Ardelee Pioleen M.
//App Name: Query Demo
//Description: Query strings

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(req.query)
})
app.listen(5600)