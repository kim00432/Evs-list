import { createContext, useContext, useState } from 'react'

const CarsContext = createContext()

function CarsProvider (props) {
  const [cars, setCars] = useState([null])

  function getCar (id) {
    // fetch /api/cars/[id]
  }
  function getCars () {
    // fetch /api/cars
  }
  function updateCar (id, ...rest) {
    // fetch /api/cars/[id]
  }
  function deleteCar (id) {
    // fetch /api/cars/[id]
  }
  function createCar (params) {
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
