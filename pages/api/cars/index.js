// /api/notes end point
import nc from 'next-connect'
import cars from '../../../datasource/data'

const handler = nc()
  .get((req, res) => {
    //returns all notes
    res.json({ cars: cars })
  })
  .post((req, res) => {
    //adds a new note
    const id = Date.now()
    const car = { ...req.body, id }
    notes.push(car)
    res.json({ car: car })
  })

export default handler
