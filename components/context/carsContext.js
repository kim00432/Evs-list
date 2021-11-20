import { createContext, useContext, useEffect, useState } from 'react'

const CarsContext = createContext()

function CarsProvider (props) {
  const [cars, setCars] = useState(null)

  async function fetchCall (obj) {
    // console.log(`received request: ${obj.method},${obj.payload}`)
    // if (obj.method === 'GET' && obj.payload === null) {
    //   let url = 'api/cars'
    //   fetch(url, { method: 'GET' })
    //     .then(resp => {
    //       if (!resp.ok) throw new Error(resp.statusText)
    //       return resp.json()
    //     })
    //     .then(data => {
    //       console.log(`received data from request: ${data.cars}`)
    //       setCars(data.cars)
    //     })
    //     .catch(console.error)
    // }
  }

  useEffect(() => {
    async function getInitialData () {
      const fetchedData = await fetch('/api/cars')
      const cars = await fetchedData.json()
      setCars(cars)
      console.log(cars)
    }
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
