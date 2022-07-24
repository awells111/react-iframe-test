import React from 'react'
import PropTypes from 'prop-types'

function Iframe(props) {
console.log("REACT_APP_IFRAME_URL: " + process.env.REACT_APP_IFRAME_URL)
  return (
    // <div>Iframe</div>
    <iframe src={process.env.REACT_APP_IFRAME_URL}></iframe>
  )
}

Iframe.propTypes = {}

export default Iframe
