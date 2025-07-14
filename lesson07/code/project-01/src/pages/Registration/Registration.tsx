import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .matches(/[A-Z]/, "Minimum one capital letter")
    .matches(/[0-9]/, "Minimum one digit")
    .max(50, "Too Long!"),
  avatar: Yup.string()
    .min(2, "Too Short!")
    .max(240, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

interface Credentials {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

const Registrations = () => {
  const [message, setMessage] = useState("");

  async function fetchRegister(credentials: Credentials) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/users/`, {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(credentials),
    });
    if (res.ok) {
      setMessage("Successfully registered");
    }
  }

  return (
    <div>
      <h1>Signup</h1>
      {message ? <div>{message}</div> : null}
      <Formik
        initialValues={{
          name: "",
          password: "",
          avatar: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          fetchRegister(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label>Name:</label>
            <Field name="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <label>Password:</label>
            <Field name="password" type="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <label>Avatar:</label>
            <Field name="avatar" />
            {errors.avatar && touched.avatar ? (
              <div>{errors.avatar}</div>
            ) : null}
            <label>Email:</label>
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registrations;
