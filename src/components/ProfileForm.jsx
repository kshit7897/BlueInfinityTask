import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "./profileform.css";
import ProfileImage from "./ProfileImage";

function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowWelcome(true);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {showWelcome ? (
        <div className="container-inner">
          <h1>Welcome To Blue Infinity {firstName + " " + lastName}</h1>
          <button className="form-button" onClick={() => setShowWelcome(false)}>
            Back
          </button>
        </div>
      ) : (
        <div className="container">
          <form className="signup-form">
            <div className="form-row">
              <input
                className="form-input"
                type="text"
                value={firstName}
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="form-input"
                type="text"
                value={lastName}
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-row">
              <input
                className="form-input"
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-row">
              <input
                className="form-input"
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="password-icon"
                onMouseEnter={togglePassword}
                onMouseLeave={togglePassword}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="form-row">
              <a href="#" className="form-link">
                Forgot Password?
              </a>

              <button
                type="submit"
                className="form-button"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
          <div className="pro-image">
            <div className="pro-image-outer">
              <ProfileImage />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SignupForm;
