import React from "react";
import { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { useMutation } from "react-query";
import { setToken } from "./Utilities/auth";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logUser } from "../Redux/user/userActions";
import { loginUser } from "./ApiCalls";



const styles = {
  form: {
    display: "grid",
    borderRadius: "0.5rem",
    color: "white",
  },
};


function LoginForm(props) {
  const {reduxLogUser, reduxEmail} = props;

  const {mutate: LoggedIn,isLoading,isError,error,data,} = useMutation(loginUser);

  const navigate = useNavigate();

  const toHome = () => {
    navigate('/home');
  }

  useEffect(() => {
    if (data?.status === 200) {
      setToken(data?.data.jwt);
      reduxLogUser(data?.data);
      toHome();
    }
  }, [data, reduxLogUser]);

  const initVal = {
    email: reduxEmail,
    password: "",
  };

  
  const validationSchema = Yup.object({
    email: Yup.string().email("Email not valid!").required("Required"),
    password: Yup.string().required("Required"),
  });

  

  const onSubmit = (values) => {
    const { email, password } = values;
    const user = {
      email: email,
      password: password,
    };

    LoggedIn(user);
  };

  if(isLoading)
  {
    return <h2>Loading...</h2>
  }

  if(isError)
  {
    console.log(error)
  }

  

  // if(data?.status === 200)
  // {
  //   setToken(data?.data.jwt)
  //   reduxLogUser(data?.data)
  //   toHome();
  // }

  
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initVal}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form style={styles.form}>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />

          <FormikControl
            control="input"
            type="password"
            label="Password"
            name="password"
          />

          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Login
          </button>
          {/* <h2>{head}</h2> */}
        </Form>
      )}
    </Formik>
  );
}

const mapStateToProps = state => {
  return {
    // reduxUser: state.user.user,
    reduxEmail: state.user.email
  }
}

const mapDispatchToProps = dispatch => {
  return {
    reduxLogUser: (user) => dispatch(logUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
