const express = require('express');
const router = express.Router();
const pool = require('../pool');

router.post('/', (req, res) => {
    const {
        feeling,
        understanding,
        support,
        comments
    } = req.body;

    const queryText =
        `INSERT INTO "feedback" (feeling, understanding, support, comments)
        VALUES ($1, $2, $3, $4)`;

        resultsValues = [feeling , understanding, support, comments];

        pool.query(queryText, resultsValues)
            .then((result) => {
                res.sendStatus(202);
            }).catch((err) =>{
                console.log('It didnt work', err);
            });

})

router.get('/', (req, res) => {
    console.log('in get router');
    pool.query('SELECT * FROM "feedback";')
    .then((results) =>{
        res.send(results.rows)
    }).catch((err) => {
        console.log('get error', err)
        res.sendStatus(500);  
    });
});

router.delete('/:id', (req, res) => {
    const toDelete = [req.params.id];

    const queryText =
        `DELETE FROM "feedback" WHERE "id" = $1`;

    pool.query(queryText, toDelete)
    .then((results) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log('error deleting', err); 
    });
});

module.exports = router;