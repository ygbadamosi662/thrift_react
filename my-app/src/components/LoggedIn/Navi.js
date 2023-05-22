import React from 'react'
import { NavLink } from 'react-router-dom'


function Navi() {
    const getActive = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal' 
        }
    }
    const handleClick = event => {
        alert('brazyyyyyy')
    }
  return (
    <nav>
        <div>
            <NavLink to='' style={getActive}>Dashboard</NavLink>
            <NavLink to='' style={getActive}>Profile</NavLink>
        </div>
        <button onClick={handleClick} type='submit'></button>
    </nav>
  )
}

export default Navi