import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <Fragment>
      <Helmet>
        {title && <title>{title} | Petgram 🐶</title>}
        {subtitle && <meta name='description' content={subtitle} /> }
      </Helmet>
      { children }
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}
