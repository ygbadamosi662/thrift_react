import {React, useState} from 'react'
import Active from './Active';
import Pending from './Pending';
import Completed from './Completed';

const panel = 'active';
function Thrifts() {
  
  const [choice, setChoice] = useState(panel)
  const handleClick = event => {
    setChoice(event.target.value)
    
  }
  
  return (
    <div>
        <div>
            <button onClick={event => handleClick(event)}  value='active'>Active</button>
            <button onClick={event => handleClick(event)}  value='pending'>Pending</button>
            <button onClick={event => handleClick(event)}  value='completed'>Completed</button>
        </div>
        {
          
          (() => {
            
            switch (choice)
            {
              case 'active':
                return <Active />
              case 'pending':
                return <Pending/>
              case 'completed':
                return <Completed/>
              default:
                return <Active/>
            }
          })()
        }
    </div>
  )
}

export default Thrifts