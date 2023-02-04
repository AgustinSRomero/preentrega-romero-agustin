import React from 'react'

function Button(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled} className={props.class}>{props.children}</button>
  )
}

export default Button