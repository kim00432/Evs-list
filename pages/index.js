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
          <p sx={{ maxWidth: '590px' }}>
            Here you will be able to compare prices across different types of
            cars. Tap the link to get started!
          </p>
          <p>
            <Link href='/cars'>
              <a
                sx={{
                  ...theme.fontSizes.headerLink,
                  ...theme.colors.darkenAccent,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                Go to car list
                <span className='material-icons'>chevron_right</span>
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
