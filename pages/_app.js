/** @jsxImportSource theme-ui */

import { ThemeProvider } from 'theme-ui'
import theme from '../styles/theme'
import '../styles/globals.css'
import Layout from '../components/Layout'
import NextNProgress from 'nextjs-progressbar';

import { CarsProvider } from '../components/context/carsContext'

function MyApp ({ Component, pageProps }) {

  return (
      <ThemeProvider theme={theme}>
        <CarsProvider>
          <Layout>
            <NextNProgress 
            color="#29D"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}/>
            <Component {...pageProps} />
          </Layout>
        </CarsProvider>
      </ThemeProvider>
  )
}
export default MyApp