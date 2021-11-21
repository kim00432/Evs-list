/** @jsxImportSource theme-ui */

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCars } from '../../components/context/carsContext'

export default function Note () {
  const router = useRouter()
  const id = router.query.id
  const [car, setCar] = useState(null)
  const [cars, fetchCall] = useCars()
  const [edit, setEdit] = useState(false)
  const [make, setMake] = useState()
  const [model, setModel] = useState()
  const [price, setPrice] = useState()
  const [img, setImg] = useState()

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

  function handleEdit () {
    setEdit(true)
    setImg(car.img)
    setMake(car.make)
    setModel(car.model)
    setPrice(car.price)
  }

  function handleCancel () {
    setEdit(false)
  }

  async function handleSave (ev) {
    const updatedCar = {
      make: make,
      model: model,
      price: price,
      img: img
    }
    await fetchCall({ method: 'PATCH', payload: { id: car.id, ...updatedCar } })
    setCar({ id: car.id, ...updatedCar })
    console.log(car)
    setEdit(false)
    setMake('')
    setModel('')
    setPrice('')
  }

  function handleSubmit (ev) {
    ev.PreventDefault()
  }

  const handleDelete = async () => {
    await fetchCall({ method: 'DELETE', payload: { id: car.id } })

    //go back to list page
    router.push('/cars')
  }

  return (
    <div sx={{ variant: 'containers.page' }}>
      <p sx={{ px: 4 }}>
        <Link href='/cars'>
          <a>Back to List</a>
        </Link>
      </p>
      {edit ? (
        <form onSubmit={handleSubmit}>
          <div
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              px: 2,
              fontSize: 3
            }}
          >
            <Image
              src={`${car.img}`}
              alt='car image'
              width={250}
              height={200}
            />
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                px: 50
              }}
            >
              <h2 sx={{ py: 2 }}>Edit the detail</h2>
              <label htmlFor='url'>Image link:</label>
              <input
                type='text'
                value={img}
                onChange={e => setImg(e.target.value)}
              />
              <label htmlFor='make'>Make:</label>
              <input
                type='text'
                value={make}
                onChange={e => setMake(e.target.value)}
              />
              <label htmlFor='model'>Model:</label>
              <input
                type='text'
                value={model}
                onChange={e => setModel(e.target.value)}
              />
              <label htmlFor='price'>Price:</label>
              <input
                type='text'
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
              <div>
                <button type='submit' onClick={handleSave}>
                  Save
                </button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        car && (
          <div sx={{ py: 2, px: 4, fontSize: 3 }}>
            <div
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                px: 2
              }}
            >
              <Image
                src={`${car.img}`}
                alt='car image'
                width={250}
                height={200}
              />
              <div
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  px: 30
                }}
              >
                <h2 sx={{ py: 2 }}>Car Detail of {car.make}</h2>
                <h4>
                  {car.make} {car.model}
                </h4>
                <h4>From CAN{`$ ${car.price}`}</h4>
                <div>
                  <button onClick={handleEdit}>Edit</button>
                  <button onClick={handleDelete}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}
