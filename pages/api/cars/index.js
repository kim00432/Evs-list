// /api/cars end point
import nc from 'next-connect'
import { loadCars, saveCars } from '../../../datasource/fs-util'

let cars = []

const handler = nc()
  .get((req, res) => {
    cars = loadCars('data.json')
    res.json({ cars: cars })
  })
  .post((req, res) => {
    if (cars.length === 0) {
      cars = loadCars('data.json')
    }

    const newCar = req.body
    cars.push(newCar)
    saveCars(cars, 'data.json')
    res.json({ newCar: newCar })
  })

export default handler
