import nc from 'next-connect'
import cars from '../../../datasource/data'

const getCar = id => cars.find(car => car.id === id)

const handler = nc()
  .get((req, res) => {
    const car = getCar(req.query.id)

    if (!car) {
      res.status(404)
      res.end()
      return
    }

    res.json({ car: car })
  })
  .patch((req, res) => {
    const car = getCar(req.query.id)
    // req.query contains all the querystring and path parts
    // that follow after /api/notes

    if (!car) {
      res.status(404)
      res.end()
      return
    }

    const i = cars.findIndex(car => car.id === req.query.id)
    const updated = { ...cars, ...req.body }

    cars[i] = updated
    res.json({ car: updated })
  })
  .delete((req, res) => {
    const car = getCar(req.query.id)

    if (!car) {
      res.status(404)
      res.end()
      return
    }
    const carIndex = cars.findIndex(car => car.id === req.query.id)

    cars.splice(carIndex, 1)

    res.json({ car: req.query.id })
  })

export default handler
