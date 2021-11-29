/** @jsxImportSource theme-ui */

import Footer from './Footer'
import NavBar from './NavBar'

const Layout = ({ children }) => {
  // const children = props.children;

  return (
    <div>
      <NavBar />
      <div>
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
