import { createContext, useContext, useEffect, useState } from 'react'
import cuid from 'cuid'

const CarsContext = createContext()

function CarsProvider (props) {
  const [cars, setCars] = useState(null)

  //get single car
  //update single car
  //delete car

  async function fetchCall (obj) {
    console.log(`received request: ${obj.method},${obj.payload}`)

    if (obj.method === 'GET' && obj.payload.id) {
      console.log(`get single car request: ${obj.payload}`)

      let url = `api/cars/${obj.payload.id}`
      fetch(url, { method: 'GET' })
        .then(resp => {
          if (!resp.ok) throw new Error(resp.statusText)
          return resp.json()
        })
        .then(data => {
          console.log(`received data from single car request:`)
          console.dir(data.car)
        })
        .catch(console.error)
    } else if (obj.method === 'DELETE' && obj.payload.id) {
      console.log(`delete car request: ${obj.payload.id}`)

      let url = `/api/cars/${obj.payload.id}`
      fetch(url, { method: 'DELETE' })
        .then(resp => {
          if (!resp.ok) throw new Error(resp.statusText)
          return resp.json()
        })
        .then(data => {
          console.log(`received deleted car from request:`)
          console.dir(data)
          getInitialData()
        })
        .catch(console.error)
    } else if (obj.method === 'PATCH' && obj.payload.id) {
      console.log(`update car request: ${obj.payload.id}`)

      let url = `/api/cars/${obj.payload.id}`
      fetch(url, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj.payload)
      })
        .then(resp => {
          if (!resp.ok) throw new Error(resp.statusText)
          return resp.json()
        })
        .then(data => {
          console.log(`received updated car from request:`)
          console.dir(data)
          getInitialData()
        })
        .catch(console.error)
    } else if (obj.method === 'POST' && obj.payload) {
      console.log(`post car request:`)
      console.dir(obj.payload)

      const id = cuid()
      const newCar = { ...obj.payload, id }
      let url = `/api/cars/`
      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCar)
      })
        .then(resp => {
          if (!resp.ok) throw new Error(resp.statusText)
          return resp.json()
        })
        .then(data => {
          console.log(`received posted car from request:`)
          console.log(data)
          getInitialData()
        })
        .catch(console.error)
    }
  }

  async function getInitialData () {
    const fetchedData = await fetch('/api/cars')
    const cars = await fetchedData.json()
    setCars(cars)
    console.log(cars)
  }

  useEffect(() => {
    getInitialData()
  }, [])

  return <CarsContext.Provider value={[cars, fetchCall]} {...props} />
}

function useCars () {
  const context = useContext(CarsContext)
  if (!context) throw new Error(`Not inside the Provider`)
  return context // cars, makeAPIcall
}

export { useCars, CarsProvider }
