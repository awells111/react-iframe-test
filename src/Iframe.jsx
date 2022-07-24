import React from 'react'
import PropTypes from 'prop-types'

function Iframe(props) {
  return (
    <iframe src={props.IFRAME_URL}></iframe>
  )
}

Iframe.propTypes = {}

export default Iframe
