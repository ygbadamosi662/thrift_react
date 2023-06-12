import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import Landlord from "./Landlord";
import {useQuery} from 'react-query'
import {appAx} from "./AppAxios";
import { connect } from "react-redux";
import { logUser } from "../Redux/user/userActions";

const stylez = (clas) => {
  return {
      borderBottom: clas === 'active' ? "0.5rem solid green" : "",
      // backgroundColor: 'black',
      height: clas === 'active'? '3rem' : '2.5rem',
      width: '50%',
      // color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: '0.5s'
      // alignText: 'center'
  };
};

const toggleStyle = {
  display: 'flex',
  marginBottom: '2rem',
  // backgroundColor: 'black'
}

const landStyle = {
  height: '60%',
  width: '40%',
  margin: '5rem 0rem 10rem  35rem',
  padding: '3rem',
  backgroundColor: 'rgb(68,70,84)'
}

function LandingPage({ initChoice }) {
  const handleChoice = (event) => {
    const what = event.currentTarget.name;

    switch (what) {
      case "reg":
        setChoice(true);
        break;
      case "log":
        setChoice(false);
        break;
      default:
        setChoice(true);
        break;
    }
  };

  const fetch = () => {
    return appAx.post('http://127.0.0.1:8080/api/v1/user/home')
  }

  const onRegOk = () => {
    // setEm(emi)
    setChoice(false)
  }
  
  const [choice, setChoice] = useState(initChoice);
  // const [em, setEm] = useState("");

  const {isError, isLoading, data} = useQuery('home', fetch);
  
  return (
    <div className="landPage" style={landStyle}>
      <div className="toggle" style={toggleStyle}>
        <Landlord
          name='reg'
          clas={choice ? "active" : ""}
          handleClick={handleChoice}
          stylez={stylez}
          display='REGISTER'
        />

        <Landlord
          name='log'
          clas={!choice ? "active" : ""}
          handleClick={handleChoice}
          stylez={stylez}
          display='LOGIN'
        />
        
      </div>
      <div>{data?.data}</div>
      
      {choice ? <RegisterForm goL={onRegOk}  /> : <LoginForm />}
    </div>
  );
}

export default LandingPage;
