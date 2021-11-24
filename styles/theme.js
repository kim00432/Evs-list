const theme = {
  config: {
    initialColorModeName: 'JC-Yoona',
    useBorderBox: true
  },
  fontSizes: {
    header: { fontSize: '48px', fontWeight: '600' },
    secondaryHeader: { fontSize: '36px', fontWeight: '500' },
    headerLink: { fontSize: '21px' },
    subHeader: { fontSize: '24px', fontWeight: '500' },
    body: { fontSize: '18px' },
    callout: { fontSize: '14px' }
  },
  colors: {
    background: { color: '#ffffff' },
    lightBody: { color: '#00000029' },
    body: { color: '#000000' },
    accent: { color: '#31B8EF' },
    darkenAccent: { color: '#0573A6' },
    formBackground: { color: '#EFEFEF' },
    formInput: { color: '#000000A8' }
  },
  containers: {
    page: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80vw',
      height: '100vh',
      maxWidth: '1200px',
      mx: '10vw'
    },
    fullWidthContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80vw',
      mx: '10vw'
    }
  },
  components: {
    links: {
      textDecoration: 'none',
      border: 'none',
      fontWeight: '400'
    },
    callToAction: {
      py: '10px',
      px: '42px',
      color: '#ffffff',
      backgroundColor: '#31B8EF',
      border: 'none',
      borderRadius: '13px',
      boxShadow: '0px 18px 42px rgba(5, 115, 166, 0.14)'
    },
    centering: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    }
  }
}

export default theme
