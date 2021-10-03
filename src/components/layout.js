import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header/header.component"
import Footer from "./footer/footer.component"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
