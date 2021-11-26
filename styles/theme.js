const theme = {
  config: {
    initialColorModeName: 'JC-Yoona',
    useBorderBox: true
  },
  fontSizes: {
    header: { fontSize: ['15px', '30px', '48px'], fontWeight: '600' },
    secondaryHeader: { fontSize: ['11px', '25px', '36px'], fontWeight: '500' },
    headerLink: { fontSize: ['12px', '16px', '21px'], fontWeight: '400' },
    subHeader: { fontSize: ['15px', '18px', '24px'], fontWeight: '500' },
    body: { fontSize: ['14px', '18px'], fontWeight: '400' },
    callout: { fontSize: ['12px', '14px'], fontWeight: '400' }
  },
  colors: {
    background: { color: '#ffffff' },
    lightBody: { color: '#00000029' },
    body: { color: '#000000' },
    accent: { color: '#31B8EF' },
    darkenAccent: { color: '#0573A6' },
    formBackground: { color: '#EFEFEF' },
    formInput: { color: '#EFEFEF' }
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
      px: '36px',
      py: '18px'
    }
  },
  components: {
    links: {
      textDecoration: 'none',
      border: 'none',
      fontWeight: '400'
    },
    buttons: {
      border: 'none',
      backgroundColor: 'white'
    },
    input: {
      border: 'none',
      backgroundColor: '#EFEFEF',
      borderRadius: '13px',
      py: '9px',
      px: '18px'
    },
    callToAction: {
      py: '10px',
      px: ['20px', '42px'],
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
      gap: '18px'
    },
    detailGrid: {
      width: '80vw',
      maxWidth: '1200px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
      gap: '18px'
    }
  }
}

export default theme
