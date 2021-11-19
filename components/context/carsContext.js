import { createContext, useContext, useState } from 'react'

const CarsContext = createContext()

function CarsProvider (props) {
  const [cars, setCars] = useState([null])

  function getCar () {
    // fetch /api/cars/[id]
  }
  function getCars () {
    // fetch /api/cars
  }
  function updateCar () {
    // fetch /api/cars/[id]
  }
  function deleteCar () {
    // fetch /api/cars/[id]
  }
  function createCar () {
    // fetch /api/cars
  }

  return (
    <CarsContext.Provider
      value={[cars, getCar, getCars, updateCar, deleteCar, createCar]}
      {...props}
    />
  )
}

function useCars () {
  const context = useContext(CarsContext)
  if (!context) throw new Error(`Not inside the Provider`)
  return context // cars, makeAPIcall
}

export { useCars, CarsProvider }
