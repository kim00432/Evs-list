/** @jsxImportSource theme-ui */

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCars } from '../../components/context/carsContext'

export default function Note () {
  const router = useRouter()
  const { id } = router.query
  const [car, setCar] = useState(null)
  const [cars, fetchCall] = useCars()
  
  useEffect(() => {
    console.log(`Fetching /api/cars/${id}`)
    let url = `/api/cars/${id}`

    if (id) {
      fetch(url, { method: 'GET' })
        .then(resp => {
          if (!resp.ok) throw new Error(resp.statusText)
          return resp.json()
        })
        .then(results => {
          setCar(results.car)
        })
        .catch(err => {
          console.warn(err.message)
          let fake = {
            id,
            title: 'No such Car Exists',
            author: err.message
          }
          setCar(fake)
        })
    }
  }, [id])

  const handleDelete = async () => {
    await fetchCall({ method: 'DELETE', payload: car.id })
    console.log(fetchCall({ method: 'DELETE', payload: car.id }))
  }

  return (
    <div sx={{ variant: 'containers.page' }}>
      {car && (
        <div sx={{ py: 2, px: 4, fontSize: 5 }}>
          <h1>{car.model}</h1>
          <h2>{car.price}</h2>
          <h3>{car.id}</h3>
          <Image src={`${car.img}`} alt="car image" width={200} height={150}/>
          <button>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
      <p sx={{ px: 4 }}>
        <Link href='/cars'>
          <a>Back to List</a>
        </Link>
      </p>
    </div>
  )
}
