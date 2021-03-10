'use strict'

const express = require('express');

const port = 3000
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());

let array = []

app.get('/', (req, res) => {
    res.send({
        array: array
    });
})

app.post('/', (req, res) => {
    array.push({'details': req.body.new, 'id': array.length})
    res.send({
        addSthNew: req.body.new
    })
})

app.put('/:id', (req, res) => {
    const id = req.params.id
    const update = req.body.update
    array = array.map(item => {
        if(item.id === parseInt(id)){
            item.details = update
        }
        return item
    })

    res.send({
        update: update
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
        deleteId: parseInt(id)
    })
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

module.exports = {app}