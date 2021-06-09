const express = require('express')

const periodsRouter = require('./periods');
const voteRouter = require('./vote');
const projectRouter = require('./project');

const router = express.Router()

router.get('/', (req, res, next) =>{
    res.status(200).send({
        title: "Projeto Integrado 2020",
        version: 1
    })
})

router.use('/periods', periodsRouter);
router.use('/projects', projectRouter);
router.use('/votes', voteRouter);

module.exports = router
