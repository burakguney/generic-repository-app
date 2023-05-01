const express = require('express');
const repository = require('../data/repository');

const router = express.Router();

const wordTable = 'words';

router.post("/", async (req, res) => {
    const { turkish, english, hint } = req.body;

    const column = ['turkish', 'english', 'hint'];
    const value = [turkish, english, hint];

    await repository.create(wordTable, column, value).then(result => {
        res.status(201).send(result);
    }).catch(error => {
        res.status(400).send(error.message);
    })
});

router.get("/", async (req, res) => {
    await repository.getAll(wordTable).then(result => {
        res.status(200).send(result);
    }).catch(error => {
        res.status(400).send(error.message);
    })
});

router.get("/:id", async (req, res) => {

    const id = req.params.id;

    await repository.getById(wordTable, id).then(result => {
        res.status(200).send(result);
    }).catch(error => {
        res.status(400).send(error.message);
    })
});

router.get("/getByTurkish", async (req, res) => {
    const { turkish } = req.body;

    const column = 'turkish';
    const value = turkish;

    await repository.getByColumn(wordTable, column, value).then(result => {
        res.status(200).send(result);
    }).catch(error => {
        res.status(400).send(error.message);
    })
});

module.exports = router;