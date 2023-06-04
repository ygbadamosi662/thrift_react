import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/LoggedIn/HomePage";
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'

const appStylez = {
  // backgroundColor: 'rgb(68,70,84)',
  height: '100vh'
}

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App" style={appStylez}>
      <React.Fragment>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<LandingPage initChoice={true}/>} />
            <Route path="home" element={<HomePage/>} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
        </QueryClientProvider>
        
      </React.Fragment>
    </div>
  );
}

export default App;
