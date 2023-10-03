const router = require('express').Router();
const path = require("path");
const generateUniqueId = require('generate-unique-id');
const fs = require('fs');

router.get('/notes', (req, res) => {
    const filePath = path.join(__dirname, '..', 'db', 'db.json');
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send(data)
        }
    });
})

router.post('/notes', (req, res) => {
    const filePath = path.join(__dirname, '..', 'db', 'db.json');
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const parsedNotes = JSON.parse(data);
            req.body.id = generateUniqueId({ length: 3 });
            parsedNotes.push(req.body);
            fs.writeFile(filePath, JSON.stringify(parsedNotes, null, 4), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('New note created!')
                }
            })
            db = parsedNotes
            res.json(req.body);
        }
    })
})

module.exports = router;