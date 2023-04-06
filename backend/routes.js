const express = require('express')
const router = express.Router()
const controller = require('./controllers/productsController')

router.get('/api/items', async (req, res) => {
  try {
    const { q = '' } = req.query
    const products = await controller.getProducts(q)
    res.send(products)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.get('/api/items/:id', async (req, res) => {
  try {
    const { id } = req.params
    const productInformation = await controller.getProductInformation(id)
    res.send(productInformation)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

module.exports = router;

