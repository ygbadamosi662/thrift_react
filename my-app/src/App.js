import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/LoggedIn/HomePage";
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import ThriftPage from "./components/LoggedIn/HomeView/ThriftPage"

const appStylez = {
  // backgroundColor: 'rgb(68,70,84)',
  height: '100vh',
  backgroundColor: 'grey'
}

const queryClient = new QueryClient()

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={appStylez}>
        <React.Fragment>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route exact path="/" element={<LandingPage initChoice={true}/>} />
              <Route path="/home" element={<HomePage/>} />
              <Route path="/home/thrift" element={<ThriftPage/>} />
            </Routes>
            <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
          </QueryClientProvider>

        </React.Fragment>
      </div>
    </Provider>
  );
}

export default App;
