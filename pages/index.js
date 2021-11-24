/** @jsxImportSource theme-ui */

import Link from 'next/link'
import styles from '../styles/Index.module.css'
import theme from '../styles/theme'

export default function Home () {
  return (
    <div sx={{ ...theme.containers.page }}>
      <div>
        <div>
          <h1 sx={theme.fontSizes.subHeader}>
            Welcome to our electronic vehicles database
          </h1>
          <p>
            Here you will be able to compare prices across different types of
            cars. Tap the link to get started!
          </p>
          <p>
            <Link href='/cars'>
              <a
                sx={{
                  ...theme.fontSizes.headerLink,
                  ...theme.colors.darkenAccent
                }}
              >
                Go to car list
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
