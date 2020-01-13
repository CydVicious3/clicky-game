import React from 'react'
import './style.css'

function Nav(props) {
  return (
    <nav className="nav">
      <ul>
        <li>Score: {props.score}  |  TopScore: {props.topscore}</li>
      </ul>
    </nav>
  )

}

export default Nav