import React from 'react'

function Button(props) {
  return (
    <button type={props.type} onClick={props.onClick} disabled={props.disabled} className={props.class}>{props.children}</button>
  )
}

export default Button