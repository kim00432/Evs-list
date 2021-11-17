import nc from 'next-connect'
import cars from '../../../datasource/data'

const getCar = id => cars.find(n => n.id === id)

const handler = nc()
  .get((req, res) => {
    const book = getCar(req.query.id)

    if (!book) {
      res.status(404)
      res.end()
      return
    }

    res.json({ book: book })
  })
  .patch((req, res) => {
    const book = getCar(req.query.id)
    // req.query contains all the querystring and path parts
    // that follow after /api/notes

    if (!book) {
      res.status(404)
      res.end()
      return
    }

    const i = cars.findIndex(n => n.id === req.query.id)
    const updated = { ...cars, ...req.body }

    cars[i] = updated
    res.json({ book: updated })
  })
  .delete((req, res) => {
    const book = getCar(req.query.id)

    if (!book) {
      res.status(404)
      res.end()
      return
    }
    const i = cars.findIndex(n => n.id === req.query.id)

    cars.splice(i, 1)

    res.json({ book: req.query.id })
  })

export default handler
