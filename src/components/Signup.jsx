import React, { useState } from "react";
import "../style.css/Home.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

function Signup() {
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Valid, setValid] = useState(true);
  
    const handlechange = (value) => {
      setPhoneNumber(value);
      setValid(validatePhoneNumber(value));
    };
  
    const validatePhoneNumber = (phoneNumber) => {
      const phoneNumberPattern = /^\d{10}$/;
      return phoneNumberPattern.test(phoneNumber);
    };
    return (
      <>
      <div className="main" style={{height: "100vh"}}>
      <div className="bg-dark text-white">
      <div className="signup-logo">
      <img src="src/assets/Logo.png"  className="logo-inner-image"/>
      </div>
        <div className=" overflow-hidden d-flex justify-content-center align-item-center h-100 w-100">
          <form className="row g-3 needs-validation" novalidate>
            <div className="col-md-0">
              <div class="form-group d-flex flex-column">
              <label for="input" class="text">
                Name
                </label>
                <input
                  type="name"
                  placeholder="Enter  your name"
                  name="input"
                  class="input"
                />
                <label for="input" class="text z-3">
                  Phone Number
                </label>
                <PhoneInput
                  country={"us"}
                  name="input"
                  className="input"
                  value={PhoneNumber}
                  inputProps={{
                    required: true,
                  }}
                />
                <label for="input" class="text">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  name="input"
                  class="input"
                />
                  <label for="input" class="text">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your Password"
                  name="input"
                  class="input"
                />
              </div>
              <div class="d-grid gap-2 mt-3">
                <button class="btn bg-warning text-black" type="button">
                  Sign Up
                </button>
              </div>
              <div className="mt-4 gap-3 d-flex justify-content-center align-item-center pl-2">
                <p>
                   Already have an account? 
                </p>
                <Link  to="/login" className="text-warning text-decoration-none">Log In</Link>
              </div>
            </div>
          </form>
        </div>
        </div>
        </div>
      </>
    );
}

export default Signup