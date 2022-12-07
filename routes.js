const router = require('express').Router()
const store = require('./story')

router.get('/', (req, res) => {
  const { query } = req
  const { priceFrom, priceTo } = query
  if (query?.priceFrom && query?.priceTo) {
    const result = store.filter((e) => e.price >= priceFrom && e.price <= priceTo)
    return res.json(result)
  }
  return res.json(store)
})

// posts
router.post('/', (req, res) => {
  let ifExist = false
  store.forEach((e) => {
    if (e.name === req.body.name) {
      ifExist = true
    }
  })

  if (!ifExist) {
    store.push({
      ...req.body
    })
    console.log(store)
    return res.json({
      message: 'item has been added'
    })
  }
  return res.json({
    message: 'item cant be add'
  })
})

// put

router.put('/:name', (req, res) => {
  const { name } = req.params
  const { price } = req.body

  const item = store.find((e) => e.name === name)

  if (item) {
    item.price = Number(price)
    console.log(store)
    return res.json({
      message: 'update successfuly'
    })
  }

  return res.json({

    message: 'product could not found'
  })
})

// delete
router.delete('/:name', (req, res) => {
  const { name } = req.params
  const item = store.find((e) => e.name === name)

  if (item) {
    item.isDeleted = true
    console.log(store)
    return res.json({
      message: 'deleted successfuly'
    })
  }

  return res.json({

    message: 'product could not found'
  })
})

module.exports = router
