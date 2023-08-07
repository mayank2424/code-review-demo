// Poor Code
const express = require('express');

const app1 = express();

app1.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    UserModel.findById(userId, (err, user) => {
        if(err) {
            console.error(err);
            res.status(500).send(err);
        } else {
            res.status(200).send(user); 
        }
    })
})
