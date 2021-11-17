/** @jsxImportSource theme-ui */

import { ThemeProvider } from 'theme-ui'
import theme from '../styles/theme'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'

function MyApp ({ Component, pageProps }) {
  // console.log(theme)

  //add data here... inside app...
  const [cars, setCars] = useState([])

  useEffect(() => {
    //get data on initial load
    let url = '/api/cars'
    fetch(url, { method: 'GET' })
      .then(resp => {
        if (!resp.ok) throw new Error(resp.statusText)
        return resp.json()
      })
      .then(data => {
        console.log(data)
        setCars(data.cars)
      })
      .catch(console.error)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component cars={cars} {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
