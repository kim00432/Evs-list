/** @jsxImportSource theme-ui */

import Link from 'next/link'
import { useCars } from '../../components/context/carsContext'
import { useEffect } from 'react'

export default function Cars () {
  const [cars, fetchCall] = useCars()

  useEffect(() => {}, [cars])

  return (
    <div>
      <h1>My Cars</h1>
      <div>
        {cars.cars.map(car => (
          <div key={car.id}>
            <Link key={car.id} href='/cars/[id]' as={`/cars/${car.id}`}>
              <a>
                <div>
                  <h1>{car.make}</h1>
                  <h2>{car.model}</h2>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
