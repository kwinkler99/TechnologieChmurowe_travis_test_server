'use strict'

const express = require('express');

const port = 3000
const HOST = '0.0.0.0';

const app = express();

let array = []

app.get('/', (req, res) => {
    res.send({
        'array': array
    });
})

app.post('/:new', (req, res) => {
    array.push({'details': req.params.new, 'id': array.length})
    res.send({
        addSthNew: req.params.new
    })
})

app.put('/:id/:update', (req, res) => {
    const id = req.params.id
    const update = req.params.update
    array = array.map(item => {
        if(item.id === parseInt(id)){
            item.details = update
        }
        return item
    })

    res.send({
        'update': update
    })

})

app.delete('/:id', (req, res) => {
    const id = req.params.id
    array = array.filter(item => item.id != parseInt(id))
    let index = 0
    array = array.map(item => {
        item.id = index
        index =+ 1
        return item
    })
    res.send({
        'deleteId': id
    })
})

app.listen(port, HOST);
console.log(`http://${HOST}:${port}`)

