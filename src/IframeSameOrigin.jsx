import React from 'react'
import AppSameOrigin from './AppSameOrigin'


function Iframe(props) {
  return (
    <iframe title="same_origin_child_frame" src='http://localhost:3003/appsameorigin'/>
  )
}

export default Iframe
