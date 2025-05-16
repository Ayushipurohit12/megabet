import React, { useState } from "react";
import "../style.css/Home.css";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Login() {
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
      <div className="logo">
      <img src="src/assets/Logo.png"  className="logo-inner-image"/>
      </div>
      <div className=" overflow-hidden d-flex justify-content-center align-item-center h-100 w-100">
        <form className="row g-3 needs-validation" novalidate>
          <div className="col-md-0">
            <div className="form-group d-flex flex-column">
              <label for="input" class="text z-3">
                  Phone Number
                </label>
                <PhoneInput
                  country={"us"}
                  name="input"
                  class="input"
                  value={PhoneNumber}
                  inputProps={{
                    required: true,
                  }}
                />
            </div>
            <div className="form-group  d-flex flex-column align-item-center">
              <label for="input" class="text">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                name="input"
                class="input"
              />
            </div>
            <div className="d-flex justify-content-end text-warning mt-3">
              <p>Forgot Password?</p>
            </div>
            <div class="form-check mt-5">
              <input
                class="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Remember me
              </label>
            </div>
            <div class="mt-3">
              <button class="btn bg-warning w-100 login-button" type="button">
                Log in
              </button>
            </div>
            <div className=" mt-2 gap-3 d-flex p-3">
              <p>
                New to <b>Megabet777 </b>?
              </p>
              <Link to="/signup" className="text-warning text-decoration-none">Sign up now</Link>
            </div>
          </div>
        </form>
      </div>
      </div>
      </div>
    </>
  );
}
export default Login;
