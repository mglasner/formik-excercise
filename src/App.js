import React from "react";
import { useState } from "react";
import {useFormik} from 'formik'
import './index.css';


function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    validate: values => {
      let errors = {};

      if (!values.email) {
        errors.email = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email';
      }

      if (!values.password) errors.password = 'Field required';

      return errors;
    },

    onSubmit: values => {
      alert("Login Successful")
    }
  })

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => setPasswordShown(!passwordShown);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            id="emailField"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
            className="form-control"
            />
          {formik.errors.email ? <div id="emailError" className="form-text">{formik.errors.email}</div>: null}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            id="pswField"
            name="password"
            type={passwordShown ? "text" : "password"}
            onChange={formik.handleChange}
            value={formik.values.password}
            required
            className="form-control"
          />

          <div className="form-check">
            <input onClick={togglePassword} type="checkbox" className="form-check-input" id="show-password"/>
            <label className="form-check-label" htmlFor="show-password">Show Password</label>
          </div>
          {formik.errors.password ? <div id="pswError" className="form-text">{formik.errors.password}</div>: null}
        </div>

        <div><button id="submitBtn" type="submit" className="btn btn-primary">Submit</button></div>
      </form>
    </div>
  );
}

export default App;





