/** @jsxImportSource theme-ui */

import Link from 'next/link'
// import styles from '../styles/Index.module.css';

export default function Home () {
  // console.log(notes); //props.notes

  return (
    <div sx={{ height: `calc(100vh - 60px)` }}>
      <div
        sx={{
          variant: 'containers.page',
          display: 'flex',
          alignItems: 'flex-start',
          height: '100%'
        }}
      >
        <div>
          <h1 sx={{ fontSize: 8, p: 2 }}>Cars App</h1>
          <p sx={{ p: 2 }}>
            Click the Cars link at the top to see all our cars.
          </p>
          <p sx={{ p: 2 }}>
            <Link href='/cars'>
              <a>Or tap here if this is closer</a>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
