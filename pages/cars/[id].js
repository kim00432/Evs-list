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
  const [edit, setEdit] = useState(false)
  const [make, setMake] = useState()
  const [model, setModel] = useState()
  const [price, setPrice] = useState()


  
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

  
  
  function handleEdit() {
    setEdit(true)
    setMake(car.make)
    setModel(car.model)
    setPrice(car.price)
  }
  
  function handleCancel(){
    setEdit(false)
  }
  
  function handleSubmit(ev) {
    ev.PreventDefault()
  }
  
  const handleDelete = async () => {
    await fetchCall({ method: 'DELETE', payload: {id: car.id} })
    
    //go back to list page
    router.push('/cars')
  }

  function handleSave(ev){
    setEdit(false)
    setMake('')
    setModel('')
    setPrice('')
  }
  


  return (
    <div sx={{ variant: 'containers.page' }}>
      <p sx={{ px: 4 }}>
        <Link href='/cars'>
          <a>Back to List</a>
        </Link>
      </p>
      {edit? 
      (<from onSubmit={handleSubmit}>
        <div sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            px: 2
          }}>
              <Image src={`${car.img}`} alt="car image" width={250} height={200}/>
              <div sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              px: 50
            }}>
                <input type="text" value={make} onChange={(e)=> setMake(e.target.value)}/>
                <input type="text" value={model} onChange={(e)=> setModel(e.target.value)}/>
                <input type="text" value={price} onChange={(e)=> setPrice(e.target.value)}/>
                <div>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
              </div>
          </div>
        </from>) : 
      (car && <div sx={{ py: 2, px: 4, fontSize: 5 }}>
          <div sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            px: 2
          }}>
            <Image src={`${car.img}`} alt="car image" width={250} height={200}/>
            <div sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              px: 50
            }}>
              <h5>{car.make} {car.model}</h5>
              <h6>From CAN{`$ ${car.price}`}</h6>
              <div>
                  <button onClick={handleEdit}>Edit</button>
                  <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
            </div>
        </div>)}
    </div>
  )
}

