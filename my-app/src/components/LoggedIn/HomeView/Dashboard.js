import React from 'react'
import Thrifts from './Ajors/Thrifts'
import Dos from './SideShow/Dos'


function Dashboard({em}) {

  return (

    <div>
        <Thrifts em={em}/>
        <Dos/>
    </div>
  )
}

export default Dashboard