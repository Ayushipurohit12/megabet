import React from "react";
import "../style.css/Home.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function Market() {
  return (
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
      <section className="my-market-main">
        <h1 className="heading">MY Market</h1>
        <hr class="withdrawal-center-line  border border-dark border-1 opacity-50"></hr>
        <table className="account-statement-table">
          <tr>
            <th className="table-date">Date</th>
            <th className="table-date">Sports</th>
            <th>Events</th>
          </tr>
          <tbody>
          <tr>
            <td className="table-border border-bottom-0">
              3/29/2024 1:49:47PM
            </td>
            <td className="table-border  border-bottom-0">
              Cricket
            </td>
            <td className="table-color   border-bottom-0">
              Royal Challengers Bangalore vs Mumbai Indians
            </td>
          </tr>
          </tbody>
        </table>
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
  );
}

export default Market;
