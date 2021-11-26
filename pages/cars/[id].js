/** @jsxImportSource theme-ui */

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCars } from '../../components/context/carsContext'
import theme from '../../styles/theme'

export default function Note () {
  const router = useRouter()
  const id = router.query.id
  const [car, setCar] = useState(null)
  const [cars, fetchCall] = useCars()
  const [edit, setEdit] = useState(false)
  const [make, setMake] = useState()
  const [model, setModel] = useState()
  const [price, setPrice] = useState()
  console.log(car)

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
      price: price
    }
    await fetchCall({ method: 'PATCH', payload: { id: car.id, img: car.img, ...updatedCar } })
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
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '80vh'
      }}
    >
      <p>
        <Link href='/cars'>
          <a
            sx={{
              ...theme.components.links,
              ...theme.fontSizes.headerLink,
              ...theme.colors.darkenAccent,
              position: 'absolute',
              left: '10vw',
              top: '20vh'
            }}
          >
            Back
          </a>
        </Link>
      </p>
      {edit ? (
        <form onSubmit={handleSubmit}>
          <div
            sx={{
              ...theme.components.listGrid,
              alignItems: 'center'
            }}
          >
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                transform: 'translate(-16.5%)'
              }}
            >
              <span
                sx={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'flex-end',
                  my: '4.5px'
                }}
              >
                <label
                  htmlFor='make'
                  sx={{ ...theme.fontSizes.body, mr: '9px' }}
                >
                  Make
                </label>
                <input
                  type='text'
                  value={make}
                  onChange={e => setMake(e.target.value)}
                  sx={{ ...theme.components.input, ...theme.fontSizes.body }}
                />
              </span>
              <span
                sx={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'flex-end',
                  my: '4.5px'
                }}
              >
                <label
                  htmlFor='model'
                  sx={{ ...theme.fontSizes.body, mr: '9px' }}
                >
                  Model
                </label>
                <input
                  type='text'
                  value={model}
                  onChange={e => setModel(e.target.value)}
                  sx={{ ...theme.components.input, ...theme.fontSizes.body }}
                />
              </span>
              <span
                sx={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'flex-end',
                  my: '4.5px'
                }}
              >
                <label
                  htmlFor='price'
                  sx={{ ...theme.fontSizes.body, mr: '9px' }}
                >
                  Price
                </label>
                <input
                  type='number'
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                  sx={{ ...theme.components.input, ...theme.fontSizes.body }}
                />
              </span>
              <div
                sx={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'flex-end'
                }}
              >
                <button
                  onClick={handleCancel}
                  sx={{
                    ...theme.components.callToAction,
                    ...theme.fontSizes.callout,
                    backgroundColor: '#575757',
                    borderRadius: '7px',
                    m: '9px'
                  }}
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  onClick={handleSave}
                  sx={{
                    ...theme.components.callToAction,
                    ...theme.fontSizes.callout,
                    borderRadius: '7px'
                  }}
                >
                  Save
                </button>
              </div>
            </div>
            <div
              className='images'
              style={{
                position: 'relative',
                height: '161%',
                width: '100%',
                paddingBottom: '30%',
                transform: 'perspective(400px) rotateY(-5deg)',
                boxShadow: '0px 9px 42px rgba(0, 0, 0, 0.14)'
              }}
            >
              <Image
                alt='car image'
                src={car.img || '/img/TeslaModelX.jpeg'}
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
        </form>
      ) : (
        car && (
          
          <div>
            <div sx={{ ...theme.components.listGrid, alignItems: 'center' }}>
              <div
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  transform: 'translate(-16.5%)'
                }}
              >
                <div
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'flex-end'
                  }}
                >
                  <h3 sx={{ ...theme.fontSizes.secondaryHeader, margin: '0' }}>
                    {car.make}
                  </h3>
                  <h5
                    sx={{
                      ...theme.fontSizes.subHeader,
                      fontWeight: '400',
                      margin: '0',
                      ml: '18px',
                      mt: '18px'
                    }}
                  >
                    {car.model}
                  </h5>
                </div>

                <div
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                  }}
                >
                  <h4
                    sx={{
                      margin: '0',
                      ...theme.fontSizes.body,
                      opacity: '66%'
                    }}
                  >
                    From {`$ ${Number(car.price).toLocaleString()}`}
                  </h4>
                </div>

                <div
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                  }}
                >
                  <button
                    sx={{
                      ...theme.components.buttons,
                      ml: '18px',
                      mt: '18px'
                    }}
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                  <button
                    sx={{
                      ...theme.components.buttons,
                      ml: '18px',
                      mt: '18px'
                    }}
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div
                className='images'
                style={{
                  position: 'relative',
                  height: '180%',
                  width: '100%',
                  paddingBottom: '30%',
                  transform: 'perspective(400px) rotateY(-5deg)',
                  boxShadow: '0px 9px 42px rgba(0, 0, 0, 0.14)'
                }}
              >
                <Image
                  alt='car image'
                  src={car.img || '/img/TeslaModelX.jpeg'}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}
