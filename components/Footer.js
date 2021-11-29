/** @jsxImportSource theme-ui */

import theme from '../styles/theme'

export default function Footer () {
  return (
    <footer
      sx={{
        ...theme.containers.fullWidthContainer,
        justifyContent: 'center',
        minHeight: '10vh'
      }}
    >
      <p sx={{ ...theme.fontSizes.callout, ...theme.colors.lightBody }}>
        &copy; 2021 Yoona Kim and JC Castagne
      </p>
    </footer>
  )
}
