/** @jsxImportSource theme-ui */

import Image from 'next/image'
import theme from '../../styles/theme'
import { useCars } from '../../components/context/carsContext'
import router, { useRouter } from 'next/router'
import defaultImage from '../../public/img/TeslaModelX.jpeg'

export default function Create () {
  const [cars, fetchCall] = useCars()
  const router = useRouter()

  function handleSubmit (ev) {
    ev.preventDefault()
    let make = ev.target.make.value
    let model = ev.target.model.value
    let price = ev.target.price.value
    if (make.trim() !== '' && model.trim() !== '' && price !=='') {
      fetchCall({ method: 'POST', payload: { make, model, price } })
      router.push('/cars')
    } else {
      alert('Please enter valid input')
    }
  }

  function handleCancel(ev) {
     //go back to list page
    router.push('/cars')
  }

  return (
      <div sx={{ variant: 'containers.page', flexDirection: 'column', mt: 0 }}>
      <h1 sx={{  justifyContent: 'center', pb: [0, 30], ...theme.fontSizes.secondaryHeader }}>Create a new car</h1>
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
                sx={{ ...theme.components.span }}
              >
                <label
                  htmlFor='make'
                  sx={{ ...theme.fontSizes.body, mr: '9px' }}
                >
                  Make
                </label>
                <input
                  type='text'
                  name='make'
                  sx={{ ...theme.components.input, ...theme.fontSizes.body }}
                />
              </span>
              <span
                sx={{ ...theme.components.span }}
              >
                <label
                  htmlFor='model'
                  sx={{ ...theme.fontSizes.body, mr: '9px' }}
                >
                  Model
                </label>
                <input
                  type='text'
                  name='model'
                  sx={{ ...theme.components.input, ...theme.fontSizes.body }}
                />
              </span>
              <span
                sx={{ ...theme.components.span }}
              >
                <label
                  htmlFor='price'
                  sx={{ ...theme.fontSizes.body, mr: '9px' }}
                >
                  Price
                </label>
                <input
                  type='number'
                  name='price'
                  sx={{ ...theme.components.input, ...theme.fontSizes.body }}
                />
              </span>
              <div
                 sx={{ ...theme.components.span, my: 0 }}
              >
                <button
                  sx={{
                    ...theme.components.callToAction,
                    ...theme.fontSizes.callout,
                    backgroundColor: '#575757',
                    borderRadius: '7px',
                    m: '9px'
                  }}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type='submit'
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
                height: '100%', 
                width: '100%',
                paddingBottom: '50%',
                transform: 'perspective(400px) rotateY(-5deg)',
                boxShadow: '0px 9px 42px rgba(0, 0, 0, 0.14)'
              }}
            >
              <Image
                alt='car image'
                src={defaultImage}
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
        </form>
        </div>
      </div>
      </div>
  )
}
