import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../style.css/Home.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function Deposit() {
  const [activeButton, setActiveButton] = useState(1); // 1 is active by default
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };
  return (
    <>
      <div className="main">
        <div className="navbar  navbar-height d-block">
          <div className="d-flex justify-content-between align-item-center">
            <img src="src/assets/Logo.png" className="logo-image" />
            <div className="d-flex justify-content-center align-item-center gap-2">
              <div className="d-flex justify-content-center align-items-center gap-2">
                <Link to="/bonuscasino">
                  <img src="src/assets/svg/present.svg" />
                </Link>
                <h2>BONUS</h2>
              </div>
              <div className="dropdown">
                <Link
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="src/assets/Group.svg" className="profile-image" />
                </Link>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="/market">
                      <img
                        src="src/assets/svg/Vector (4).svg"
                        className="menu-image"
                      />
                      My Market
                    </Link>
                    <hr className="dropdown-line" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/accountstate">
                      <img
                        src="src/assets/svg/financial-statement 1.svg"
                        className="menu-image"
                      />
                      Account Statement
                    </Link>
                    <hr className="dropdown-line" />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <img
                        src="src/assets/svg/arcticons_passwordgenerator.svg"
                        className="menu-image"
                      />
                      Change Password
                    </Link>
                    <hr className="dropdown-line" />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <img
                        src="src/assets/svg/lets-icons_setting-line-light.svg"
                        className="menu-image"
                      />
                      Chips Setting
                    </Link>
                    <hr className="dropdown-line" />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <img
                        src="src/assets/svg/terms-and-conditions 1.svg"
                        className="menu-image"
                      />
                      Terms & Condition
                    </Link>
                    <hr className="dropdown-line" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      <img
                        src="src/assets/svg/uiw_logout.svg"
                        className="menu-image"
                      />
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-item-center px-2 gap-3">
            <div className="deposit">
              <div className="d-flex p-2 gap-3">
                <Link to="/deposit" className="deposit-link">
                  Deposit
                </Link>
                <div className="deposit-line"></div>
                <Link to="/withdrawal" className="deposit-link">
                  Withdrawal
                </Link>
              </div>
            </div>
            <div className="dropdown">
              <Link
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textDecoration: "none" }}
              >
                <div className="money d-flex justify-content-center align-item-center">
                  <img src="src/assets/svg/wallet 1.svg" className="wallet" />
                  <span>760.00</span>
                </div>
              </Link>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link
                    className="dropdown-item  d-flex justify-content-between align-items-center"
                    href="#"
                  >
                    <p>Balance</p>
                    <span>760.00</span>
                  </Link>
                  <hr className="dropdown-line" />
                </li>
                <li>
                  <Link
                    className="dropdown-item d-flex justify-content-between align-items-center "
                    href="#"
                  >
                    <p> Ext. Balance</p>
                    <span>4,680.28</span>
                  </Link>

                  <hr className="dropdown-line" />
                </li>
                <li>
                  <Link
                    className="dropdown-item d-flex justify-content-between align-items-center"
                    href="#"
                  >
                    <p> Exposure</p>
                    <span>240.00</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section>
          <h1 className="heading">Deposit</h1>
          <hr class="bonuse-center-line  border border-dark border-1 opacity-50"></hr>
          <div className="deposit-content">
            <div className="p-3">
              <div className="amount d-flex align-items-center">
                <img src="src/assets/svg/ep_info-filled (1).svg" />
                <p> Min Deposit Amount : </p>
                <span>₹200</span>
              </div>
              <div className="amount-activate d-flex align-items-center w-100">
                <img src="src/assets/svg/ep_info-filled (1).svg" />
                <p>Min Deposit Amount To Activate Bonus:</p>
                <span> ₹500</span>
              </div>
              <div className="form-group coolinput d-flex flex-column">
                <label for="input" class="amount">
                  Amount
                </label>
                <input
                  type="amount"
                  placeholder="Enter your amount"
                  name="input"
                  class="input"
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-item-center">
            <button className=" submit-button">Submit Request</button>
          </div>
        </section>
        <Footer />
        <div className="bottom-navbar">
        <div className="d-flex align-items-center justify-content-around">
          <Link to="/loginhome">
            <button>
              <img src="src/assets/svg/home-2.svg" className="bottom-image" />
              Home
            </button>
          </Link>
          <Link to="/casino">
            <img src="src/assets/svg/Group 104.svg" className="margin-left" />
          </Link>
          <Link to="/live">
            <img
              src="src/assets/svg/streamline_live-video.svg"
              className="margin-left"
            />
          </Link>
          <Link to="/testmatch">
            <img
              src="src/assets/svg/arcticons_sportschau.svg"
              className="margin-left"
            />
          </Link>
          <Link to="/slots">
            <img src="src/assets/svg/Group 106.svg" className="margin-left" />
          </Link>
        </div>
      </div>
      
      </div>
    </>
  );
}
export default Deposit;
