// /api/cars end point
import nc from 'next-connect'
import cars from '../../../datasource/data'
import cuid from 'cuid'

const handler = nc()
  .get((req, res) => {
    //returns all cars
    res.json({ cars: cars })
  })
  .post((req, res) => {
    //adds a new note
    const newCar = req.body
    cars.push(newCar)
    res.json({ newCar: newCar })
  })

export default handler
