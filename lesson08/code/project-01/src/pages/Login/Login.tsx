import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .matches(/[A-Z]/, "Minimum one capital letter")
    .matches(/[0-9]/, "Minimum one digit")
    .max(50, "Too Long!"),
  email: Yup.string().email("Invalid email").required("Required"),
});

interface Credentials {
  email: string;
  password: string;
}

const Login = () => {
  const [message, setMessage] = useState("");
  const { setUser } = useCurrentUser();

  async function fetchLogin(credentials: Credentials) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(credentials),
    });
    if (res.ok) {
      setMessage("Successfully sign in");
      const { access_token } = await res.json();
      console.log(access_token);
      fetchUser(access_token);
    }
  }

  async function fetchUser(access_token: string) {
    const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    const obj = await res.json();
    setUser(obj);
  }

  return (
    <div>
      <h1>Signin</h1>
      {message ? <div>{message}</div> : null}
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          fetchLogin(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label>Password:</label>
            <Field name="password" type="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
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

export default Login;
