// Auth.jsx
import './index.css';
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function Auth() {
  const [userstate, setUserState] = useState({});

  return (
    <div className="App">
      {/* Change the parent route path to include a trailing "*" */}
      <Routes>
        <Route path="/login" element={<Login setUserState={setUserState} />} />
        <Route path="/*" element={<Register />} />
      </Routes>
    </div>
  );
}

export default Auth;
