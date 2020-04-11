/*
    apirest
    endpoint
    ==>  Recibe peticiones  => front   ==> POST - GET
    ==> Envía respuestas  => front  

    BACKEND 
            Lenguajes diferentes
            ==> Java
            ==> php
            
            ==> Node Js  ==> JavaScript  ==> Front 
                Fácil de configurar
                Comercial ==> fácil encontrar documentación 

            ==> C# 
            ==> Ruby
            ==> Python
*/
//server
const express = require('express')// llamando la libreria
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.API_PORT || 9000

// configuración del server
app.use(cors("*"))
app.use(bodyParser.json()) // recibir y enviar peticiones
app.use(bodyParser.urlencoded({ extended: true }))

//endpoints => apirest
app.get('/getUsers', async (req, res) => {

    /* consulta a la db */
    const users = [
        { id: '1', name: 'Juan', city: 'Medellin', age:18, salary:3200000 },
        { id: '2', name: 'Pedro', city: 'Bogotá', age:23, salary:4100000 },
        { id: '3', name: 'Camilo', city: 'Cali', age:27, salary:3500000 },
        { id: '4', name: 'Andres', city: 'Medellin', age:22, salary:2800000 }
    ]

    res.send({
        users,
    });

})

app.listen(port, () => {
    console.log(`Server is listening  at http://localhost:${port}`)
})