import React from 'react'
import Navi from "./Navi.js"
import Footer from "./Footer.js"
import Dashboard from './HomeView/Dashboard'
import { setAuthJwt, appAx } from '../AppAxios.js'
import { getToken } from '../Utilities/auth.js'
import { connect } from "react-redux";


const stylex = {
  position: 'relative'
}

function HomePage({reduxUser}) {
  const jwt = getToken();
  setAuthJwt(jwt);
  
  return (
    <div style={stylex}>
      <Navi/>
      <Dashboard />  
      <Footer/>
      <div>{reduxUser.fname}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    reduxUser: state.user.user
  }
}

export default connect(mapStateToProps)(HomePage);