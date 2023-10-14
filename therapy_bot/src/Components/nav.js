import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const navbar = () => {
  return (
    <div className = "navbar">
        <div className = "links">
            <Link to="/">Home</Link>
            <Link to="/auth">Auth</Link>
        </div>
    </div>
  )
}
export default navbar