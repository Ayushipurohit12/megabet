import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../style.css/Home.css";
import { Link } from "react-router-dom";
import Details from "./Modals/Details";
import Footer from "./Footer";
import Bottom from "./Bottom";
function Bonuscasino() {
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
          <h1 className="heading">BONUSES</h1>
          <hr class="bonuse-center-line  border border-dark border-1 opacity-50"></hr>
          <div className="d-flex gap-2 px-2">
            <div className="casino-bonuses">
              <button
                className={`casino d-flex justify-content-center align-items-center ${
                  activeButton === 1 ? "active" : ""
                }`}
                onClick={() => handleButtonClick(1)}
              >
                <img
                  src="src/assets/svg/bonus (2) 1.svg"
                  className="casino-image"
                />
                <p>Casino Bonus</p>
              </button>
            </div>
            <div className="casino-bonuses">
              <button
                className={`casino d-flex justify-content-center align-items-center ${
                  activeButton === 2 ? "active" : ""
                }`}
                onClick={() => handleButtonClick(2)}
              >
                <img
                  src="src/assets/svg/history 1.svg"
                  className="casino-image"
                />
                <p> Bonus History</p>
              </button>
            </div>
          </div>
          {activeButton === 1 && (
            <div className="content">
              <div className="active-bonus d-flex">
                <p> Active Bonuses - </p>
                <span> 1 </span>
              </div>
              <div className="deposit-bonus">
                <img src="src/assets/svg/Rectangle 376.svg" />
                <div className="px-2">
                  <div className="deposit-rolling d-flex ">
                    <p>Deposit Rolling -</p>
                    <span>Active</span>
                  </div>
                  <p className="rolling-content">Deposit Rolling</p>
                  <div className="create d-flex gap-3">
                    <p>Created On</p>
                    <span>3/29/2024</span>
                  </div>
                  <div className="d-flex  justify-content-between align-items-center px-1 deposit-amount">
                    <div className="d-flex gap-4 ">
                    <p>Deposit Amount</p>
                    <span>1000</span>
                    </div>
                    <div className="d-flex gap-4">
                    <p className="bonus">Bonus Amount</p>
                    <span>1000</span>
                    </div>
                  </div>
                  <div className="d-flex  justify-content-between align-items-center px-1 deposit-amount">
                    <div className="d-flex gap-5">
                    <p className="wagering-roll">Wagering</p>
                    <span>10x rolling</span>
                    </div>
                    <div className="d-flex gap-3">
                    <p className="expire-date">Expire</p>
                    <span>4/30/2024</span>
                    </div>
                  </div>
                  <p className="label-wagering">wagering</p>
                  <div className="wagering">
                    <div className="wagering-content d-flex  justify-content-between align-items-center">
                      <div className="wagering-total">
                        <p>Total</p>
                        <span className="total">2500</span>
                      </div>
                      <div className="wagering-total">
                        <p>Fulfilled</p>
                        <span>20</span>
                      </div>
                      <div className="wagering-total">
                        <p>Remaining</p>
                        <span>2480</span>
                      </div>
                    </div>
                  </div>
                  <div className=" d-flex justify-content-around align-items-center  mt-4 gap-3">
                    <button className="remove-button d-flex justify-content-center align-items-center">
                      <img src="src/assets/svg/solar_trash-bin-2-line-duotone.svg" />
                      <span> Remove </span>
                    </button>
                    <button className="claim-button d-flex justify-content-center align-items-center">
                      <img src="src/assets/svg/claim 1.svg" />
                      <span>Claim</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="active-bonus d-flex">
                <p> Active Bonuses - </p>
                <span> 1 </span>
              </div>
              <div className="deposit-bonus">
                <img src="src/assets/Rectangle 376.png" />
                <div className="px-2">
                  <div className="deposit-rolling d-flex  align-items-center mt-2">
                    <p>Deposit Rolling -</p>
                    <span>Active</span>
                  </div>
                  <p className="rolling-content">Deposit Rolling</p>
                  <div className="create d-flex gap-3">
                    <p>Created On</p>
                    <span>3/29/2024, 1:49:47 PM</span>
                  </div>
                  <div className="d-flex  justify-content-between align-item-center px-1 deposit-amount">
                    <div className="d-flex gap-4">
                    <p>Deposit Amount</p>
                    <span>500</span>
                    </div>
                    <div className="d-flex gap-3">
                    <p className="bonus">Bonus Amount</p>
                    <span>50</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-item-center px-1 deposit-amount">
                    <div className="d-flex gap-4">
                    <p className="wagering-roll">Wagering</p>
                    <span>10x rolling</span>
                    </div>
                    <div className="d-flex gap-4">
                    <p className="expire-date">Expire</p>
                    <span>4/30/2024</span>
                    </div>
                  </div>
                  <p className="label-wagering">wagering</p>
                  <div className="wagering">
                    <div className="wagering-content d-flex justify-content-between align-item-center ">
                      <div className="wagering-total">
                        <p>Total</p>
                        <span className="total">2500</span>
                      </div>
                      <div className="wagering-total">
                        <p>Fulfilled</p>
                        <span>20</span>
                      </div>
                      <div className="wagering-total">
                        <p>Remaining</p>
                        <span>2480</span>
                      </div>
                    </div>
                  </div>
                  <div className=" d-flex justify-content-around  align-items-center mt-4 gap-3 w-100">
                    <button className="null-button  d-flex justify-content-center  align-items-center w-100">
                      <img src="src/assets/svg/material-symbols-light_lock-outline.svg" />
                      <span> NA </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        <section className="px-2">
          {activeButton === 2 && (
            <div className="bonus-history">
              <div className="d-flex ">
                <div className="bonus-content w-25 d-flex">
                  <p>3/29/2024 1:49:47 PM</p>
                </div>
                <hr className="line-bonus" />
                <div className="d-flex justify-content-between  w-100 p-2 px-2">
                  <div className="bonus-heading">
                    <p>Deposit rolling </p>
                       <p className="m-0">111</p>
                    <div className="rolling">
                      <p>Deposit rolling</p>
                      <span> Deposit rolling</span>
                    </div>
                  </div>
                  <div className="bonus-button">
                    <button>Forfeited</button>
                    <div>
                    <Link onClick={() => setModalOpen(true)} className="details">
                    Details
                  </Link>
                  <Details
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                  />
                  </div>
                  </div>
                
                </div>
              </div>
              <hr />
            </div>
          )}
        </section>
       <Footer />
       <Bottom />
      </div>
    </>
  );
}
export default Bonuscasino;
