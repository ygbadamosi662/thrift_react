import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/LoggedIn/HomePage";

const appStylez = {
  // backgroundColor: 'rgb(68,70,84)',
  height: '100vh'
}

function App() {
  return (
    <div className="App" style={appStylez}>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<LandingPage initChoice={true}/>} />
          <Route path="home" element={<HomePage/>} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
