import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import {appAx, setAuthJwt} from './AppAxios'
import { useQuery, useMutation } from "react-query";

const styles = {
  form: {
    display: 'grid',
    borderRadius: '0.5rem',
    color: 'white'

  }
}

const postUser = (user) => {
  return appAx.post('http://127.0.0.1:8080/api/v1/user/auth/register', user)
}

function RegisterForm() {
  // const {isLoading, isError, data, error, refetch} = useQuery(
  //   'user',
  //   postUser,
  //   {
  //     enabled: false,
  //   }
  //   )
  const {mutate: addUser, isLoading, isError, error, data} = useMutation(postUser)
  
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
    // birthdate: null
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
    // birthdate: Yup.date().required('Required').nullable()
  });
  const onSubmit = (values) => {
    const {fname, lname, email, gender, password, phone} = values
    const user = {
      'fname': fname,
      'lname': lname,
      'email': email,
      'gender': gender,
      'password': password,
      'phone': phone
    }
    addUser(user)
    // console.log(values);
  };

  if(isLoading)
  {
    return <h2>Loading...</h2>
  }

  if(isError)
  {
    console.log(error)
  }

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

          {/* <FormikControl
            control="date"
            label="Date of birth"
            name="birthdate"
          /> */}
          <button type="submit" disabled={!formik.isValid || formik.isSubmitting} >Submit</button>
          <h3>{console.log(data?.data)}</h3>
        </Form>
      )}
    </Formik>
  );
}

export default RegisterForm;
