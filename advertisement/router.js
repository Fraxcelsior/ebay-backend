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

router.get('/advertisements/:id', (req, res, next) => {
    const id = req.params.id
    Advertisement
        .findByPk(id)
        .then(advertisement => {
            res.status(200).json(advertisement)
        })
        .catch(error => next(error))
})

router.post('/advertisements/', (req, res, next) => {
    Advertisement
        .create( {
            title: req.body.title,
            description: req.body.description,
            picture: req.body.picture,
            price: req.body.price,
            email: req.body.email,
            phone_number: req.body.phone_number
        })
        .then(advertisement => res.status(201).json(advertisement))
        .catch(error => next(error))
})

module.exports = router