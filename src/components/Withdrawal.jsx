import React, { useState } from "react";
import "../style.css/Home.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Selectaccount from "../components/Modals/Selectaccount";
function Withdrawal() {
  const [activeButton, setActiveButton] = useState(1); // 1 is active by default
  const [modalOpen, setModalOpen] = useState(false);
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
              <div className="d-flex  gap-3 p-2">
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
          <h1 className="heading">Withdrawal</h1>
          <hr class="withdrawal-center-line  border border-dark border-1 opacity-50"></hr>
          <div className="withdrawal-upi d-flex justify-content-between align-items-center">
            <p className="m-0">UPI/Others</p>
            <div className="upi-account">
              <img src="src/assets/svg/basil_add-outline.svg" className="m-1" />
              <span>Add UPI Account </span>
            </div>
          </div>
          <div className="withdrawal-content d-flex justify-content-between align-items-baseline">
            <div className="main-upi-id">
              <div className=" d-flex gap-2">
                <p>UPI Id :</p>
                <span>1234567890</span>
              </div>
              <div className="d-flex gap-2">
                <p className="m-0">Account Holder Name :</p>
                <p className="m-0">Test One</p>
              </div>
            </div>
            <img src="src/assets/svg/bxs_edit.svg" className="upi-image" />
          </div>
          <hr class="game-center-line text-center border border-dark border-1 opacity-50  mx-auto"></hr>
          <div className="withdrawal-upi d-flex justify-content-between align-items-center">
            <p className="m-0">Bank Accounts</p>
            <div className="upi-account">
              <img src="src/assets/svg/basil_add-outline.svg" className="m-1" />
              <span>Add Bank Account </span>
            </div>
          </div>
          <div className="withdrawal-content d-flex justify-content-between align-items-baseline">
            <div className="main-upi-id">
              <div className=" d-flex gap-2">
                <p>Account Name:</p>
                <p>text</p>
              </div>
              <div className="d-flex gap-2">
                <p>Account Number :</p>
                <span>313212133</span>
              </div>
              <div className="d-flex gap-2">
                <p>IFSC Code :</p>
                <span>1321dsr234</span>
              </div>
              <div className=" d-flex gap-2">
                <p>Account Type :</p>
                <p>Savings</p>
              </div>
              <div className=" d-flex gap-2">
                <p>Bank Name :</p>
                <p>My bank</p>
              </div>
            </div>
            <img src="src/assets/svg/bxs_edit.svg" className="upi-image" />
          </div>
          <hr class="game-center-line text-center border border-dark border-1 opacity-50  mx-auto"></hr>
          <div className="withdrawal-upi ">
            <p>Withdrawal Request</p>
          </div>
          <div className="deposit-content">
            <div className="p-3">
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
                
                <button
        className="account-statement-search-box box"
        onClick={() => setModalOpen(true)}
      >
        Select Account
      </button>
                <img
                  src="src/assets/svg/arrow_selector_tool (1).svg"
                  class="withdrawal-icon"
                ></img>
                 <Selectaccount open={modalOpen} onClose={() => setModalOpen(false)} />
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-center align-item-center">
            <button class=" submit-button">Submit Request</button>
          </div>
          <div className="deposit-content">
            <table className="w-100">
              <tbody>
                <tr className="withdrawal-table-main">
                  <td className="withdrawal-table">3/29/2024 1:49:47 PM</td>
                  <td className="d-flex  justify-content-between p-3">
                    <div className="withdrawal-table-name">
                      <p>Name : Test one</p>
                      <div className="d-flex">
                        <p>Upi id :</p>
                        <span>1234567980</span>
                      </div>
                    </div>
                 
                    <div class="withdrawal-button">
                      <button>Rejected</button>
                      <p>₹500</p>
                    </div>
                  
                
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="withdrawal-table-main">
                  <td className="withdrawal-table">3/29/2024 1:49:47 PM</td>
                  <td className="d-flex  justify-content-between p-3">
                    <div className="withdrawal-table-name">
                      <p>Name : Test one</p>
                      <div className="d-flex">
                        <p>Upi id :</p>
                        <span>1234567980</span>
                      </div>
                    </div>
                   
                    <div class="withdrawal-button withdrawal-button-color">
                      <button>Settled</button>
                      <p>₹500</p>
                    </div>
                  
                  
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="withdrawal-table">3/29/2024 1:49:47 PM</td>
                  <td className="d-flex  justify-content-between p-3">
                    <div className="withdrawal-table-name">
                      <p>Name : Test one</p>
                      <div className="d-flex">
                        <p>Upi id :</p>
                        <span>1234567980</span>
                      </div>
                    </div>
                   
                    <div class="withdrawal-button">
                      <button>Rejected</button>
                      <p>₹500</p>
                    </div>
              
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
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
        <Footer />
      </div>
    </>
  );
}
export default Withdrawal;
