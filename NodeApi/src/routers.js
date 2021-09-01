const express = require('express')

const routes = express.Router();

routes.get('/', (req, res) =>{
    return res.json({helloword: 'Olá, mundo'})
})

module.exports = routes;