import React from 'react'
import { connect } from "react-redux";
import { setThrift } from "../../../../Redux/Thrift/thriftActions";


const thriftStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem'
}
function Thrift({thrift, reduxSetThrift}) {

  const handleMore = () => {
    reduxSetThrift(thrift, 'MORE')
  }
  
  return (
    <div style={thriftStyle}>
        <h4>{thrift.name}</h4>
        <h4>{thrift.ticket}</h4>
        <h4>{thrift.organizer.email}</h4>
        <h4>{thrift.thrift_start}</h4>
        <h4>{thrift.slots}</h4>
        <button onClick={() => handleMore()} >More... </button>
    </div>
  )
}


const mapDispatchToProps = dispatch => {
  return {
    reduxSetThrift: (thri, mOl) => dispatch(setThrift(thri, mOl))
  }
}

export default connect(null, mapDispatchToProps)(Thrift);