import React from 'react'
import Navi from "./Navi.js"
import Footer from "./Footer.js"
import Dashboard from './HomeView/Dashboard'

function HomePage() {
  return (
    <div>
      <Navi/>
      <Dashboard/>
      <Footer/>
    </div>
  )
}

export default HomePage