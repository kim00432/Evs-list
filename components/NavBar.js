/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import theme from '../styles/theme'
import { useMediaQuery } from 'react-responsive'

// See: https://theme-ui.com/components

export default function NavBar () {
  let routeListener = useRouter().pathname
  let onAddPage = '/cars/create'

  function locationListener () {
    if (routeListener === onAddPage) {
      return { display: 'none' }
    }
  }

  const isSmallerScreen = useMediaQuery({ query: '(max-width: 500px)' })

  return (
    <header sx={{ ...theme.containers.fullWidthContainer, height: '10vh' }}>
      {isSmallerScreen && (
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
                // py: '9.22px',
                px: '18px',
                boxShadow: '0px 9px 36px rgba(5, 115, 166, 0.28)',
                ...theme.fontSizes.headerLink,
                display: 'flex',
                alignItems: 'center',
                position: 'fixed',
                bottom: '10vh',
                right: '10vw'
              }}
            >
              <span className='material-icons'>add</span>Create
            </a>
          </Link>
        </nav>
      )}

      {!isSmallerScreen && (
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
                ...theme.fontSizes.headerLink,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              Create new <span className='material-icons'>add</span>
            </a>
          </Link>
        </nav>
      )}
    </header>
  )
}
