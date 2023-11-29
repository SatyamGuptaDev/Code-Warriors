import React, { useState, useEffect } from "react";
import basestyle from "./Base.module.css";
import loginstyle from "./Login.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";

const Login = ({ setUserState }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const errors = validateForm(user);
    setFormErrors(errors);
    setIsSubmit(true);

    if (Object.keys(errors).length === 0) {
      // Check if the provided email and password match the special case
      if (user.email === "sgatsatyam@gmail.com" && user.password === "satyamgupta") {
        // Simulate a server response with a delay
        setTimeout(() => {
          dispatch(authActions.login()); // Simulated dispatch
          const loggedInUser = { email: "sgatsatyam@gmail.com", password: "satyamgupta" };
          setUserState(loggedInUser);
          localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
          navigate("/project", { replace: true });
        }, 2000);
      } else {
        // Retrieve user registrations from local storage
        const userRegistrations = JSON.parse(localStorage.getItem('userRegistrations')) || [];

        // Check if the provided email and password match any user in local storage
        const matchingUser = userRegistrations.find(
          (registeredUser) => registeredUser.email === user.email && registeredUser.password === user.password
        );

        if (matchingUser) {
          // Simulate a server response with a delay
          setTimeout(() => {
            dispatch(authActions.login()); // Simulated dispatch
            setUserState(matchingUser);
            // Save the user information in local storage
            localStorage.setItem('loggedInUser', JSON.stringify(matchingUser));
            navigate("/project", { replace: true });
          }, 2000);
        } else {
          // Simulate a server response with a delay
          setTimeout(() => {
            alert("Invalid email or password");
          }, 2000);
        }
      }
    }
  };



  return (
    <div className={loginstyle.login}>
      <form>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={changeHandler}
          value={user.email}
        />
        <p className={basestyle.error}>{formErrors.email}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        <p className={basestyle.error}>{formErrors.password}</p>
        <button className={basestyle.button_common} onClick={loginHandler}>
          Login
        </button>
      </form>
      <NavLink to="/auth">Not yet registered? Register Now</NavLink>
    </div>
  );
};

export default Login;
