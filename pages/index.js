/** @jsxImportSource theme-ui */

import Link from 'next/link'
// import styles from '../styles/Index.module.css';

export default function Home () {
  return (
    <div>
      <div>
        <div>
          <h1>Cars App</h1>
          <p>Click the Cars link at the top to see all our cars.</p>
          <p>
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
