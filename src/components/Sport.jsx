import React from "react";
import { Link } from "react-router-dom";
import "../style.css/Home.css";
import CenterMode from "./CenterMode";
import Gaming from "./Gaming";
import Footer from "./Footer";
import Bottom from "./Bottom";
function Sport() {
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
          <div className="d-flex justify-content-between align-item-center p-3">
            <a
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <img src="src/assets/svg/mingcute_down-line.svg" />
            </a>
            <p className="test-matches">TEST MATCHES</p>
            <img src="src/assets/svg/fluent_list-28-filled (3).svg" />
          </div>
          <div className="scroll">
            <div class="collapse" id="collapseExample">
              <div className="event-content">
                <div className="d-flex justify-content-between">
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
                <div className="test-match-button d-flex justify-content-around align-items-center">
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
              <hr className="game-center-line text-center border border-dark border-1 opacity-50  mx-auto" />
              <div className="event-content">
                <div className="d-flex justify-content-between">
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
                <div className="test-match-button d-flex align-items-center justify-content-around">
                  <div className="match-button margin ">
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
              <hr class="game-center-line text-center border border-dark border-1 opacity-50  mx-auto"></hr>
              <div className="event-content">
                <div className="d-flex justify-content-between">
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
                <div className="test-match-button d-flex align-items-center justify-content-around">
                  <div className="match-button margin ">
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
        </div>

        <div className="event">
          <div className="d-flex justify-content-between align-item-center p-3">
            <a
              data-bs-toggle="collapse"
              href="#collapse1"
              role="button"
              aria-expanded="false"
              aria-controls="collapse1"
            >
              <img src="src/assets/svg/mingcute_down-line.svg" />
            </a>
            <p className="test-matches">INDIAN PREMIRE LEAGUE</p>
            <img src="src/assets/svg/fluent_list-28-filled (3).svg" />
          </div>
          <div className="scroll">
            <div class="collapse" id="collapse1">
              <div className="event-content">
                <div className="d-flex justify-content-between">
                  <div className="event-heading">
                    <div className="d-flex">
                      <h3>Mumbai Indian vs </h3>
                      <p className="footer-sub-heading">Rajasthan Royals</p>
                    </div>
                  </div>
                  <div className="event-left-side">
                    <div className="date-of-match">
                      <h3>9 MAR 11:00 AM</h3>
                    </div>
                  </div>
                </div>
                <div className="test-match-button d-flex align-items-center justify-content-around">
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
              <hr className="game-center-line text-center border border-dark border-1 opacity-50  mx-auto" />
              <div className="event-content">
                <div className="d-flex justify-content-between">
                  <div className="event-heading">
                    <h3 className="mb-4">Delhi Capitals Vs Gujarat Lions </h3>
                  </div>
                  <div className="event-left-side ">
                    <div className="date-of-match">
                      <h3>9 MAR 11:00 AM</h3>
                    </div>
                  </div>
                </div>
                <div className="test-match-button d-flex mt-2">
                  <div className="match-button margin ">
                    <div className="test-button">
                      <p>1.27</p>
                    </div>
                  </div>
                  <div className="match-button color">
                    <div className="test-button background">
                      <p>1.27</p>
                    </div>
                  </div>
                  <div className="d-flex">
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
                  <div className="d-flex mx-2">
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
              <hr class="game-center-line text-center border border-dark border-1 opacity-50  mx-auto"></hr>
              <div className="event-content">
                <div className="d-flex justify-content-between">
                  <div className="event-heading">
                    <h3 className="mb-4">Delhi Capitals Vs Gujarat Lions </h3>
                  </div>
                  <div className="event-left-side">
                    <div className="date-of-match">
                      <h3>9 MAR 11:00 AM</h3>
                    </div>
                  </div>
                </div>
                <div className="test-match-button d-flex justify-content-around align-items-center ">
                  <div className="match-button margin ">
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
        </div>
        <div className="event">
          <div className="d-flex justify-content-between align-item-center p-3">
            <a
              data-bs-toggle="collapse"
              href="#collapse2"
              role="button"
              aria-expanded="false"
              aria-controls="collapse2"
            >
              <img src="src/assets/svg/mingcute_down-line.svg" />
            </a>
            <p className="test-matches">T20 SERIES</p>
            <img src="src/assets/svg/fluent_list-28-filled (3).svg" />
          </div>
          <div className="scroll">
            <div class="collapse" id="collapse2">
              <div className="event-content">
                <div className="d-flex justify-content-between">
                  <div className="event-heading">
                    <h3 className="mb-4">India Vs England</h3>
                  </div>
                  <div className="event-left-side">
                    <div className="date-of-match">
                      <h3>9 MAR 11:00 AM</h3>
                    </div>
                  </div>
                </div>
                <div className="test-match-button d-flex justify-content-around align-items-center ">
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
              <hr className="game-center-line text-center border border-dark border-1 opacity-50  mx-auto" />
              <div className="event-content">
                <div className="d-flex justify-content-between">
                  <div className="event-heading mb-4">
                    <h3>India Vs England</h3>
                  </div>
                  <div className="event-left-side">
                    <div className="date-of-match">
                      <h3>9 MAR 11:00 AM</h3>
                    </div>
                  </div>
                </div>
                <div className="test-match-button d-flex justify-content-around align-items-center">
                  <div className="match-button margin ">
                    <div className="test-button">
                      <p>1.27</p>
                    </div>
                  </div>
                  <div className="match-button color">
                    <div className="test-button background">
                      <p>1.27</p>
                    </div>
                  </div>

                  <div className="match-button">
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
              <hr class="game-center-line text-center border border-dark border-1 opacity-50  mx-auto"></hr>
              <div className="event-content">
                <div className="d-flex justify-content-between">
                  <div className="event-heading">
                    <h3 className="mb-4">India Vs England</h3>
                  </div>
                  <div className="event-left-side">
                    <div className="date-of-match">
                      <h3>9 MAR 11:00 AM</h3>
                    </div>
                  </div>
                </div>
                <div className="test-match-button d-flex justify-content-around align-items-center">
                  <div className="match-button margin ">
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
        </div>
        <Footer />

        <Bottom />
      </div>
    </>
  );
}

export default Sport;
