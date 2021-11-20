/** @jsxImportSource theme-ui */

import { ThemeProvider } from 'theme-ui'
import theme from '../styles/theme'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'

import { CarsProvider } from '../components/context/carsContext'

function MyApp ({ Component, pageProps }) {
  return (
    <CarsProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CarsProvider>
  )
}

export default MyApp
