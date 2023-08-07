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


const fsPromise = require('fs').promises;

async function readAndWriteToFile(fileToWriteName) {
    try {
        const data = await fsPromise.readFile('example.txt', 'utf8');
        await fsPromise.writeFile(fileToWriteName, data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}
