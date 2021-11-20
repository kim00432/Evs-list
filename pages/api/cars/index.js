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
    const car = req.body.payload
    cars.push(car)
    res.json({ car: car })
  })

export default handler
