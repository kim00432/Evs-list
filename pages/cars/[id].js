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
    <div 
    sx={{
      ...theme.containers.fullWidthContainer,
      justifyContent: 'center',
      flexDirection: 'column',
      minHeight: '80vh'
    }}>
      <p sx={{ml: '-90%', mt: '-10%'}}>
        <Link href='/cars'>
          <a>Back</a>
        </Link>
      </p>
      {edit ? (
        <form onSubmit={handleSubmit}>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              // flexWrap: 'wrap',
              px: 2,
              fontSize: 10
            }}
          >
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                px: 0
              }}
            >
              <span>
              <label sx={{...theme.fontSizes.callout, mr: 3}} htmlFor='make'>Make</label>
              <input sx={{width: '15vw', height: '4vh', m: 1}}
                type='text'
                value={make}
                onChange={e => setMake(e.target.value)}
              />
              </span>
              <span>
              <label sx={{...theme.fontSizes.callout, mr: 3}} htmlFor='model'>Model</label>
              <input sx={{width: '15vw', height: '4vh', m: 1}}
                type='text'
                value={model}
                onChange={e => setModel(e.target.value)}
              />
              </span>
              <span>
              <label sx={{...theme.fontSizes.callout, mr: 3}} htmlFor='price'>Price</label>
              <input sx={{width: '15vw', height: '4vh', m: 1}}
                type='text'
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
              </span>
              <div>
                <button onClick={handleCancel}  
                   sx={{
                    ...theme.components.callToAction,
                    ...theme.fontSizes.callout,
                    backgroundColor: '#575757',
                    borderRadius: '7px',
                    m: 3
                  }}>Cancel</button>
                <button type='submit' onClick={handleSave}
                  sx={{
                    ...theme.components.callToAction, 
                    ...theme.fontSizes.callout,
                    borderRadius: '7px'
                  }}>
                  Save
                </button>
              </div>
            </div>
            <div
              className='images'
              style={{
                position: 'relative',
                width: '45vw',
                paddingBottom: '30%'
              }}
            >
              <Image
                alt='car image'
                src={`${car.img}`}
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
        </form>
      ) : (
        car && (
          <div sx={{ py: 2, px: 4, fontSize: 10 }}>
            <div
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                px: 2,
                width: '100%'
              }}
            >
              <div
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  mt: '-10%',

                }}
              >
                <div
                sx={{
                  display: 'flex',
                  flexDirection: 'row', alignItems:'flex-end', ...theme.fontSizes.secondaryHeader}}>
                  <h3>{car.make}</h3><h5 sx={{fontWeight: '400', ml: 2}}>{car.model}</h5>
                </div>
                <h4 sx={{...theme.fontSizes.callout, color: 'grey'}}>From {`$ ${car.price.toLocaleString()}`}</h4>
                <div>
                  <button onClick={handleEdit}>Edit</button>
                  <button onClick={handleDelete}>Delete</button>
                </div>
              </div>
              <div
                className='images'
                style={{
                  position: 'relative',
                  width: '45vw',
                  paddingBottom: '30%'
                }}
              >
                <Image
                  alt='car image'
                  src={`${car.img}`}
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}