import React from 'react'
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTicket } from "../../../../Redux/Thrift/thriftActions";


const thriftStyle = {
  display: 'flex',
  gap: '4rem',
  padding: '1rem'
}

function ThriftInShort({thrift, reduxSetTicket}) {
  const navigate = useNavigate();

  const handleMore = () => {
    reduxSetTicket(thrift.ticket);
    navigate("Thrift");

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
    reduxSetTicket: (ticket) => dispatch(setTicket(ticket))
  }
}

export default connect(null, mapDispatchToProps)(ThriftInShort);