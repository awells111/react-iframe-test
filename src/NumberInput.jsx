import React from 'react'

function NumberInput(props) {
  return (
    <input type="number" id="quantity" name="quantity" defaultValue={props.defaultValue}/>
  )
}

export default NumberInput
