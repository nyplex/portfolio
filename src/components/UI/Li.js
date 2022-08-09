import React from 'react'

const Li = (props) => {
  return (
    <li onClick={props.onClick} className={props.classes}>
        {props.children}
    </li>
  )
}

export default Li