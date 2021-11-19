import { createContext, useContext, useState } from 'react'

const CarsContext = createContext()

function CarsProvider (props) {
  const [cars, setCars] = useState([null])

  function makeAPIcall () {
    return
  }

  return <CarsContext.Provider value={[cars, makeAPIcall]} {...props} />
}

function useCars () {
  const context = useContext(CarsContext)
  if (!context) throw new Error(`Not inside the Provider`)
  return context
}

export { useCars, CarsProvider }
