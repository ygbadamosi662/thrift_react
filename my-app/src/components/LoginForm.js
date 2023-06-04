import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { appAx, setAuthJwt } from "./AppAxios";
import { useMutation } from "react-query";
import { setToken, getToken } from "./Utilities/auth";


const styles = {
  form: {
    display: "grid",
    borderRadius: "0.5rem",
    color: "white",
  },
};

const logUser = (user) => {
  // console.log(user)
  return appAx.post("http://127.0.0.1:8080/api/v1/user/auth/login", user);
};

function LoginForm() {
  const {mutate: LoggedIn,isLoading,isError,error,data,} = useMutation(logUser);

  const initVal = {
    email: "",
    password: "",
  };

  
  const validationSchema = Yup.object({
    email: Yup.string().email("Email not valid!").required("Required"),
    password: Yup.string().required("Required"),
  });

  if(isLoading)
  {
    return <h2>Loading...</h2>
  }

  if(isError)
  {
    console.log(error)
  }

  const onSubmit = (values) => {
    const { email, password } = values;
    const user = {
      email: email,
      password: password,
    };
    LoggedIn(user);
    setToken(data?.data.jwt)
    
  };
  

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

export default LoginForm;
