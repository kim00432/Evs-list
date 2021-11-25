import nc from 'next-connect'
import { loadCars, saveCars } from '../../../datasource/fs-util'

let cars = []
cars = loadCars('data.json')

const getCar = id => cars.find(car => car.id === id)

const handler = nc()
  .get((req, res) => {
    if (cars.length === 0) {
      cars = loadCars('data.json')
    }

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

    if (!car) {
      res.status(404)
      res.end()
      return
    }

    const indexOfCarToUpdate = cars.findIndex(car => car.id === req.query.id)

    saveCars(cars, 'data.json')

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

    saveCars(cars, 'data.json')

    res.json({ car: req.query.id })
  })

export default handler
