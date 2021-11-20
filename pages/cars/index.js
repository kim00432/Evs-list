/** @jsxImportSource theme-ui */

import Link from 'next/link'
import { useCars } from '../../components/context/carsContext'
import { useEffect } from 'react'

export default function Cars () {
  const [cars, fetchCall] = useCars()

  useEffect(() => {}, [cars])

  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1 sx={{ py: 2, px: 4 }}>My Cars</h1>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          py: 2,
          px: 4
        }}
      >
        {cars.cars.map(car => (
          <div key={car.id} sx={{ width: '33%', p: 2 }}>
            <Link key={car.id} href='/cars/[id]' as={`/cars/${car.id}`}>
              <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div sx={{ variant: 'containers.card' }}>
                  <strong>{car.make}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
