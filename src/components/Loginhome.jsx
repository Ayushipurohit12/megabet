import React from "react";
import "../style.css/Home.css";
import CenterMode from "./CenterMode";
import Gaming from "./Gaming";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Bottom from "./Bottom";
function Loginhome() {
  return (
    <div className="main">
    <div className="navbar navbar-height d-block">
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
          <div className="d-flex justify-content-between align-item-center gap-3 px-2">
            <div className="deposit">
              <div className="d-flex justify-content-center gap-3 p-2">
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
      <section className="game-box">
        <div className="d-flex justify-content-center align-item-center">
          <CenterMode />
        </div>
        <div className="switch-main-box">
          <div className="switch-box">
            <div className="switch">
              <div className="switch-content d-flex justify-content-between">
                <h1 className="text-uppercase switch-heading">
                  Switch to casino
                </h1>
                <img src="src/assets/image 1.png" className="card-image" />
              </div>
            </div>
          </div>
        </div>
        <hr className="divider" />
        <Gaming />
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="filter ">
            <div className="d-flex">
            <img src="src/assets/Vector.svg" class="filter-image" />
            <h3 class="filter-heading m-0">Filter</h3>
            </div>
            <hr class="filter-line  opacity-50 " />
          </div>
        
          <div class="search-icon d-flex align-items-center">
            <a
              data-bs-toggle="collapse"
              href="#collapse4"
              aria-expanded="false"
              aria-controls="collapse4"
            >
              <img src="src/assets/search (1).svg" class="search-image" />
            </a>
            <div
              class="collapse collapse-right collapse-horizontal"
              id="collapse4"
            >
              <input type="text" placeholder="Search.." />
            </div>
            <img src="src/assets/fluent_list-28-filled (1).svg" />
          </div>
        </div>
        <div className="event">
          <div className="scroll">
          <div className="event-content">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="event-heading">
                    <h3>India Vs England</h3>
                    <p>Test Match</p>
                  </div>
                  <div className="event-left-side">
                    <div className="date-of-match">
                      <h3>9 MAR 11:00 AM</h3>
                    </div>
                  </div>
                </div>
                <div className="test-match-button d-flex justify-content-around">
                  <div className="match-button  ">
                    <div className="test-button">
                      <p>1.27</p>
                    </div>
                  </div>
                  <div className="match-button color">
                    <div className="test-button background">
                      <p>1.27</p>
                    </div>
                  </div>
                  <div className="match-button  ">
                    <div className="test-button">
                      <p>1.27</p>
                    </div>
                  </div>
                  <div className="match-button color">
                    <div className="test-button background">
                      <p>1.27</p>
                    </div>
                  </div>
                  <div className="match-button  ">
                    <div className="test-button">
                      <p>1.27</p>
                    </div>
                  </div>
                  <div className="match-button color">
                    <div className="test-button background">
                      <p>1.27</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="divider" />
              <div className="event-content">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="event-heading">
                    <h3>India Vs England</h3>
                    <p>Test Match</p>
                  </div>
                  <div className="event-left-side">
                    <div className="date-of-match">
                      <h3>9 MAR 11:00 AM</h3>
                    </div>
                  </div>
                </div>
                <div className="test-match-button d-flex justify-content-around">
                  <div className="match-button  ">
                    <div className="test-button">
                      <p>1.27</p>
                    </div>
                  </div>
                  <div className="match-button color">
                    <div className="test-button background">
                      <p>1.27</p>
                    </div>
                  </div>
                  <div className="match-button  ">
                    <div className="test-button">
                      <p>1.27</p>
                    </div>
                  </div>
                  <div className="match-button color">
                    <div className="test-button background">
                      <p>1.27</p>
                    </div>
                  </div>
                  <div className="match-button  ">
                    <div className="test-button">
                      <p>1.27</p>
                    </div>
                  </div>
                  <div className="match-button color">
                    <div className="test-button background">
                      <p>1.27</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <Footer />
      </section>
      <Bottom />
    </div>
  );
}
export default Loginhome;
