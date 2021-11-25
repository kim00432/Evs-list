const theme = {
  config: {
    initialColorModeName: 'JC-Yoona',
    useBorderBox: true
  },
  fontSizes: {
    header: { fontSize: ['28.13px', '35.16px', '43.95px'], fontWeight: '600' },
    secondaryHeader: {
      fontSize: ['22.5px', '28.13px', '35.16px'],
      fontWeight: '500'
    },
    subHeader: { fontSize: ['18px', '22.5px', '28.13px'], fontWeight: '500' },
    headerLink: { fontSize: ['14px', '18px', '22.5px'], fontWeight: '400' },
    body: { fontSize: ['11.52px', '14px', '18px'], fontWeight: '400' },
    callout: { fontSize: ['9.22px', '11.52px', '14px'], fontWeight: '400' }
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
      minHeight: '80vh',
      maxWidth: '1200px',
      mx: '10vw'
    },
    fullWidthContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80vw',
      mx: '10vw'
    },
    card: {
      boxShadow: '0px 18px 42px rgba(5, 115, 166, 0.14)',
      backgroundColor: '#00000',
      borderRadius: '13px',
      px: ['22.5px', '28.13px', '35.16px'],
      py: ['11.52px', '14px', '18px']
    }
  },
  components: {
    links: {
      textDecoration: 'none',
      border: 'none',
      fontWeight: '400'
    },
    callToAction: {
      py: ['9.22px', '11.52px', '14px'],
      px: ['28.13px', '35.16px', '43.95px'],
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
    },
    listGrid: {
      width: '80vw',
      maxWidth: '1200px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
      gap: ['11.52px', '14px', '18px']
    }
  }
}

export default theme
