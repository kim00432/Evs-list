const theme = {
  config: {
    initialColorModeName: 'JC-Yoona',
    useBorderBox: true
  },
  colors: {
    body: '#000000',
    background: '#fff',
    primary: '#5c6ac4',
    secondary: '#006fbb'
  },
  containers: {
    page: {
      display: 'flex',
      justifyContext: 'center',
      width: '100%',
      maxWidth: '1200px',
      mx: 'auto'
    },
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2
    }
  }
}

export default theme
