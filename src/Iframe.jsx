import React from 'react'

function Iframe(props) {
  return (
    <iframe title="child_frame" src={props.IFRAME_URL}></iframe>
  )
}

export default Iframe
