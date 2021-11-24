/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import theme from '../styles/theme'

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
    <header sx={{ ...theme.containers.fullWidthContainer, height: '15vh' }}>
      <nav sx={theme.components.centering}>
        <div sx={{ display: 'flex' }}>
          <Link href='/'>
            <a sx={{ ...theme.fontSizes.header, ...theme.colors.accent }}>
              EVs List
            </a>
          </Link>
          <p
            sx={{
              pl: '9px',
              ...theme.fontSizes.callout,
              ...theme.colors.lightBody
            }}
          >
            Next.JS
          </p>
        </div>

        <Link href='/cars'>
          <a
            sx={{
              ...theme.components.links,
              ...theme.fontSizes.headerLink,
              ...theme.colors.darkenAccent
            }}
          >
            Car list
          </a>
        </Link>

        <Link href='/cars/create'>
          <a
            style={locationListener()}
            sx={{
              ...theme.components.callToAction,
              ...theme.fontSizes.headerLink
            }}
          >
            Create new
          </a>
        </Link>
      </nav>
    </header>
  )
}
