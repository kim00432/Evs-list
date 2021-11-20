/** @jsxImportSource theme-ui */

import Link from 'next/dist/client/link'

import { useCars } from '../../components/context/carsContext'

export default function Create () {
  const [cars, fetchCall] = useCars()

  const handleDelete = () => {
    fetchCall({ method: 'DELETE', payload: { id: car.id } })
  }

  function handleSubmit (ev) {
    ev.preventDefault()
    let make = ev.target.make.value
    let model = ev.target.model.value
    let price = ev.target.price.value
    let url = ev.target.url.value

    fetchCall({ method: 'POST', payload: { make, model, price, url } })
  }

  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1 sx={{ py: 2, px: 4 }}>Create a new car</h1>
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
        <div sx={{ width: '33%', p: 2 }}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='make'>Make:</label>
              <input name='make' type='text' />
            </div>
            <div>
              <label htmlFor='model'>Model:</label>
              <input name='model' type='text' />
            </div>
            <div>
              <label htmlFor='price'>Price:</label>
              <input name='price' type='number' />
            </div>
            <div>
              <label htmlFor='url'>Image link:</label>
              <input name='url' type='url' />
            </div>

            <button type='submit'>Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}
