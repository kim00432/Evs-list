/** @jsxImportSource theme-ui */

import Link from 'next/link'
import { useCars } from '../../components/context/carsContext'
import { useEffect } from 'react'
import theme from '../../styles/theme'

export default function Cars () {
  const [cars, fetchCall] = useCars()

  useEffect(() => {}, [cars])

  return (
    <div
      sx={{
        ...theme.containers.fullWidthContainer,
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '80vh'
      }}
    >
      <h1 sx={theme.fontSizes.secondaryHeader}>Cars</h1>
      <div sx={theme.components.listGrid}>
        {cars &&
          cars.cars.map(car => (
            <div key={car.id} sx={{ ...theme.containers.card }}>
              <Link key={car.id} href='/cars/[id]' as={`/cars/${car.id}`}>
                <a>
                  <div
                    sx={{
                      ...theme.components.centering
                    }}
                  >
                    <h1
                      sx={{
                        fontSize: '1em',
                        margin: '0',
                        ...theme.fontSizes.subHeader,
                        ...theme.colors.body
                      }}
                    >
                      {car.make}
                    </h1>
                    <h2
                      sx={{
                        fontSize: '1em',
                        margin: '0',
                        ...theme.fontSizes.body,
                        ...theme.colors.body
                      }}
                    >
                      {car.model}
                    </h2>
                    <span className='material-icons' sx={theme.colors.accent}>
                      chevron_right
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}
