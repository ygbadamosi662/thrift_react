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

function RegisterForm() {
  const initVal = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    confirmPass: "",
    gender: "",
    // selectOption: "",
    // checkOptions: [],
    birthdate: null
  };

  // const checks = [
  //   {key: "one", value: "value1"},
  //   {key: "two", value: "value2"},
  //   {key: "three", value: "value3"},
  //   {key: "four", value: "value4"}
  // ]
  const genders = [
    {key: "Your gender", value: ""},
    {key: "Male", value: "MALE"},
    {key: "Female", value: "FEMALE"},
    {key: "Other", value: "OTHER"}
  ]
  const validationSchema = Yup.object({
    fname: Yup.string().required("Required"),
    lname: Yup.string().required("Required"),
    email: Yup.string().email('Email not valid!').required("Required"),
    password: Yup.string().required("Required"),
    confirmPass: Yup.string()
      .oneOf([Yup.ref('password')], 'password must match')
      .required('Required'),
    gender: Yup.string().required("Required"),
    phone: Yup.number().required('Required'),
    // selectOption: Yup.string().required("Required"),
    // checkOptions: Yup.array().required('Required'),
    birthdate: Yup.date().required('Required').nullable()
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
            type="text"
            label="Firstname"
            name="fname"
          />

          <FormikControl
            control="input"
            type="text"
            label="Lastname"
            name="lname"
          />

          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />

          <FormikControl
            control="input"
            type="text"
            label="Phone Number"
            name="phone"
          />

          <FormikControl
            control="input"
            type="password"
            label="Password"
            name="password"
          />

          <FormikControl
            control="input"
            type="password"
            label="Confirm Password"
            name="confirmPass"
          />

          <FormikControl
            control="select"
            options={genders}
            label="Your gender"
            name="gender"
          />

          {/* <FormikControl
            control="checkbox"
            options={checks}
            label="Checkers"
            name="checkOptions"
          /> */}

          <FormikControl
            control="date"
            label="Date of birth"
            name="birthdate"
          />
          <button type="submit" disabled={!formik.isValid || formik.isSubmitting} >Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default RegisterForm;
