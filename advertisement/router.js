const { Router } = require('express')
const Advertisement = require('./model')

const router = new Router()

router.get('/advertisements/', (req, res, next) => {
    Advertisement
        .findAll()
        .then(advertisements => {
            res.status(200).json(advertisements)
        })
        .catch(error => next(error))
}) 

router.get('/advertisements/:id') 

module.exports = router