import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const styles = {
  form: {
    display: 'grid',
    borderRadius: '0.5rem',
    color: 'white'

  }
}

function LoginForm() {
  const initVal = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Email not valid!").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
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
            name="emails"
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
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
