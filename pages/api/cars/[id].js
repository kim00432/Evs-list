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
    //gives current (old)car in data to update
    const car = getCar(req.query.id)
    if (!car) {
      res.status(404)
      res.end()
      return
    }

    const indexOfCarToUpdate = cars.findIndex(car => car.id === req.query.id)

    let updatedCar = req.body

    cars[indexOfCarToUpdate] = updatedCar
    res.json({ updatedCar: updatedCar })
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
