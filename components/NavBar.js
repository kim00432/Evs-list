/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

// See: https://theme-ui.com/components

export default function NavBar () {
  let routeListener = useRouter().pathname
  let onAddPage = '/cars/create'

  function locationListener () {
    if (routeListener === onAddPage) {
      return { display: 'none' }
    }
  }

  return (
    <header>
      <nav>
        <Link href='/'>
          <a>Cars App</a>
        </Link>

        <Link href='/cars'>
          <a>Cars</a>
        </Link>

        <button style={locationListener()}>
          <Link href='/cars/create'>Add car</Link>
        </button>
      </nav>
    </header>
  )
}
