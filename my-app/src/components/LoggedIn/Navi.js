import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from './Search/Search'


const stylex = {
    height: '5rem',
    backgroundColor: 'orange',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // gap: '1rem'
}

const homeStyle = {
    textDecoration: 'none',
    fontWeight: 'bold'
}

function Navi() {
    
  return (
    <nav>
        <div style={stylex}>
            <NavLink to='/home' style={homeStyle} >Home</NavLink>
            <Search/>
        </div>
    </nav>
  )
}

export default Navi