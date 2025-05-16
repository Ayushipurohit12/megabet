import React, { useState } from "react";
import "../style.css/Home.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Bottom from "./Bottom";
function Accountstate() {
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
          <div className="d-flex justify-content-between align-item-center px-2  gap-3">
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
        <section className="account-statement-main">
          <h1 className="heading">Account Statement</h1>
          <hr class="account-statement-center-line  border border-dark border-1 opacity-50"></hr>
          <div className="account-statement">
            <div className="d-flex justify-content-end px-2">
              <img src="src/assets/svg/simple-icons_googlesheets.svg" />
              <img src="src/assets/svg/vscode-icons_file-type-pdf2.svg" />
            </div>
            <div className="account-statement-content ">
              <div className="account-statement-content-date  d-flex align-items-center ">
                <span>Date Wise</span>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  className=" mx-2"
                />
              </div>
              <div className="d-flex gap-3 account-statement-content-date">
                <p>2024/04/11</p>
                <span>To</span>
                <p>2024/04/11</p>
              </div>
              <div className=" d-flex justify-content-flex-start align-items-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="account-statement-search"
                />
                <img
                  src="src/assets/svg/ic_baseline-search.svg"
                  className="account-statement-search-icon"
                />
              </div>
            </div>
            <div className="d-flex gap-2  mt-5">
              <div className="casino-bonuses">
                <button
                  className={`casino d-flex justify-content-center align-items-center ${
                    activeButton === 1 ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick(1)}
                >
                  <img
                    src="src/assets/svg/ion_wallet-sharp.svg"
                    className="casino-image"
                  />
                  <p>Wallet</p>
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
                    src="src/assets/svg/betting (1) 1.svg"
                    className="casino-image"
                  />
                  <p>Bets</p>
                </button>
              </div>
            </div>
            {activeButton === 1 && (
              <div className="account-statement-main-table">
                <table className="account-statement-table">
                  <thead>
                    <tr>
                      <th className="table-border">Date</th>
                      <th className="table-border">Description</th>
                      <th className="table-border">CR</th>
                      <th>DR</th>
                      <th>Balance</th>
                      <th className="table-border">Date</th>
                      <th className="table-border">Description</th>
                      <th className="table-border">CR</th>
                      <th>DR</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="5" className="b-none">
                        No Data Available
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {activeButton === 2 && (
              <div className="account-statement-main-table">
                <table className="account-statement-table">
                  <thead>
                    <tr>
                      <th className="table-date">Date</th>
                      <th className="table-description ">Description</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="table-border">3/29/2024 1:49:47PM</th>
                      <th>
                        cricket{" "}
                        <img src="src/assets/svg/ant-design_right-outlined.svg" />{" "}
                        Indian Premier League{" "}
                        <img src="src/assets/svg/ant-design_right-outlined.svg"></img>
                        Royal Challengers Bangalore Result : Kolkata knight
                        Rider
                      </th>
                    </tr>
                  </tbody>
                  <tr>
                    <th className="table-border  border-bottom-0">
                      3/29/2024 1:49:47PM
                    </th>
                    <th className="border-bottom-0">
                      Slot{" "}
                      <img src="src/assets/svg/ant-design_right-outlined.svg" />{" "}
                      cricketx{" "}
                      <img src="src/assets/svg/ant-design_right-outlined.svg" />{" "}
                      sms_cricketx
                    </th>
                  </tr>
                </table>
              </div>
            )}
          </div>
        </section>
     
        <Footer />
        <Bottom />
      </div>
    </>
  );
}

export default Accountstate;
