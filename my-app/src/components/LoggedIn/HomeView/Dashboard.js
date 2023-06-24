import React from 'react'
import Thrifts from './Ajors/Thrifts'


const stylex = {
  dBoard: {
    display: 'flex',
    gap: '2rem'   
  }
}
function Dashboard() {

  return (

    <div style={stylex.dBoard}>
        <Thrifts />
        {/* <Dos /> */}
    </div>
  )
}

export default Dashboard