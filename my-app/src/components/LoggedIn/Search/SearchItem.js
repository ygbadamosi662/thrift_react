import React from 'react'
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTicket } from '../../../Redux/Thrift/thriftActions';


const styles = {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    backgroundColor: 'green',
    marginBottom: '0.5rem',
    height: '2rem',
}

const styleH4 = {
  color: 'white'
}


function SearchItem({item, reduxSetTicket, reduxTicket}) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    reduxSetTicket(item.ticket);
    navigate("/home/thrift");
  }


  
  
  return (
    <div style={styles} onClick={handleClick}>
        <h4 style={styleH4} >{item.ticket}</h4>
        <h4 style={styleH4}>{item.org_email}</h4>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    reduxTicket: state.thrifts.ticket
  }
}

const mapDispatchToProps = dispatch => {
  return {
    reduxSetTicket: (ticket) => dispatch(setTicket(ticket))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchItem);