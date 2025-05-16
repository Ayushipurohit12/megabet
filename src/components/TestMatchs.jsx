import React, { useState } from "react";
import "../style.css/Home.css";
import { Link } from "react-router-dom";
import Bottom from "./Bottom";
import Footer from "./Footer";
function TestMatchs() {
  const [activeButton, setActiveButton] = useState(1); // 1 is active by default
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };
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
      <section className="test-match">
        <h1 className="heading">Test Match</h1>
        <hr class="withdrawal-center-line  border border-dark border-1 opacity-50"></hr>
        <div className="test-match-content d-flex justify-content-between">
          <p>BANGLADESH </p>
          <p>vs </p>
          <p>SHRI LANKA</p>
        </div>
        <div className="test-match-date">
          <p>30 MAR | 09:30 AM</p>
        </div>
        <div>
          <img
            src="src/assets/svg/Megabet777 _ Admin Panel - Google Chrome 11-04-2024 13_10_25 2.svg"
            style={{ width: "100%"}}
          />
        </div>
        <div>
          <ul class="d-flex test-match-navbar">
            <li class="nav-item">
              <Link
                className={`nav-link ${activeButton === 1 ? "active" : ""}`}
                onClick={() => handleButtonClick(1)}
              >
                All
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className={`nav-link ${activeButton === 2 ? "active" : ""}`}
                onClick={() => handleButtonClick(2)}
              >
                Match ODD
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className={`nav-link ${activeButton === 3 ? "active" : ""}`}
                onClick={() => handleButtonClick(3)}
              >
                Bookmaker
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className={`nav-link ${activeButton === 4 ? "active" : ""}`}
                onClick={() => handleButtonClick(4)}
              >
                Fancy
              </Link>
            </li>
          </ul>
        </div>
        {activeButton === 1 && (
          <div>
            <div className="d-flex justify-content-between">
              <div>
                <h1 className="heading mb-3"> Match ODDS</h1>
                <hr class="withdrawal-center-line  border border-dark border-1 opacity-50 mt-1"></hr>
              </div>
              <span className="test-match-min">Min: 100 | Max: 10k</span>
            </div>
            <div className="test-match-ODD mb-2">
              <div className="d-flex justify-content-between align-items-center">
                <div className="p-2">
                  <p className="inner-side p-2">Bangladesh</p>
                  <div className="d-flex justify-content-center align-item-center ">
                    <p className="inner-side p-2">0</p>
                    <img src="src/assets/svg/Arrow 1.svg" />
                    <span className="inner-side inner-side-color p-2">
                      720.00
                    </span>
                  </div>
                </div>
                <div className="d-flex p-3">
                  <div className="test-match-button-main">
                    <div className="test-match-btn">
                      <p>1.72 24146.25</p>
                    </div>
                  </div>
                  <div className="text-match-button-main-color">
                    <div className="test-match-button-background">
                      <p>1.73 24146.25</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="test-match-ODD p-2 ">
              <div className="d-flex gap-3 align-item-center justify-content-around">
                <div className="rectangle">
                  <hr />
                </div>
                <p className="d-content">1.72</p>
                <div className="rectangle">
                  <hr />
                </div>
                <div className="rectangle">
                  <hr />
                </div>
                <p className="d-content">1000</p>
                <div className="rectangle">
                  <hr />
                </div>
              </div>
              <div className="d-flex justify-content-around align-item-center d-button">
                <p>100</p>
                <p>1000</p>
                <p>2000</p>
                <p>5000</p>
                <p>10000</p>
              </div>
              <div className="d-flex gap-3 align-item-center justify-content-around  d-button-main">
                <p>20,000</p>
                <p>50,000</p>
                <p>100,000</p>
                <button>
                  <img
                    src="src/assets/svg/mdi_clear-outline.svg"
                    className="clear-image"
                  />
                  Clear
                </button>
              </div>
              <div className="d-flex justify-content-between align-item-center gap-3 p-2 pt-4">
                <button className="remove-button cancel-button d-flex justify-content-center align-items-center">
                  <img src="src/assets/svg/Vector (5).svg" />
                  Cancel
                </button>
                <button className="betting-button">
                  <img src="src/assets/svg/betting (2) 1 (1).svg" />
                  Place Bet
                </button>
              </div>
            </div>
            <div className="test-match-ODD mt-2">
              <div className="d-flex justify-content-between align-items-center">
                <div className="p-2">
                  <p className="inner-side p-2">Shri Lanka</p>
                  <div className="d-flex justify-content-center align-item-center ">
                    <p className="inner-side p-2">0</p>
                    <img src="src/assets/svg/Arrow 1.svg" />
                    <span className="inner-side inner-side-color p-2">
                      1000
                    </span>
                  </div>
                </div>
                <div className="d-flex p-3">
                  <div className="test-match-button-main">
                    <div className="test-match-btn">
                      <p>1.72 24146.25</p>
                    </div>
                  </div>
                  <div className="text-match-button-main-color">
                    <div className="test-match-button-background">
                      <p>1.73 24146.25</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="divider"></hr>

            <div className="d-flex justify-content-between">
              <div>
                <h1 className="heading mb-3">Bookmaker</h1>
                <hr class="withdrawal-center-line  border border-dark border-1 opacity-50 mt-1"></hr>
              </div>
              <span className="test-match-min">Min: 100 | Max: 200k</span>
            </div>
            <div className="test-match-ODD">
              <div className="d-flex justify-content-between align-items-center">
                <p className="inner-side p-4">Bangladesh</p>
                <div className="d-flex p-3">
                  <div className="test-match-button-main">
                    <div className="test-match-btn">
                      <p>72 </p>
                      <p>200k</p>
                    </div>
                  </div>
                  <div className="text-match-button-main-color">
                    <div className="test-match-button-background">
                      <p>72 </p>
                      <p>200k</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="test-match-center-line" />
              <div className="d-flex justify-content-between">
                <p className="inner-side p-4">Shri Lanka</p>
                <div className="d-flex px-2 p-2">
                  <div className="test-match-button-main">
                    <div className="test-match-btn">
                      <p className="pt-1">71 </p>
                      <p className="font mt-1">200k</p>
                      <span>Suspended</span>
                    </div>
                  </div>
                  <div className="text-match-button-main-color">
                    <div className="test-match-button-background">
                      <p className="pt-1">72 </p>
                      <p className="font mt-1">200k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="divider"></hr>

            <div className="d-flex justify-content-between">
              <div>
                <h1 className="heading mb-3">Tied Match</h1>
                <hr class="withdrawal-center-line  border border-dark border-1 opacity-50 mt-1"></hr>
              </div>
              <span className="test-match-min">Min: 100 | Max: 10k</span>
            </div>
            <div className="test-match-ODD">
              <div className="d-flex justify-content-between align-items-center">
                <p className="inner-side p-4">Yes</p>
                <div className="d-flex p-3">
                  <div className="test-match-button-main">
                    <div className="test-match-btn">
                      <p>1.72 24146.25</p>
                    </div>
                  </div>
                  <div className="text-match-button-main-color">
                    <div className="test-match-button-background">
                      <p>1.73 24146.25</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="test-match-center-line" />
              <div className="d-flex justify-content-between">
                <p className="inner-side p-4">No</p>
                <div className="d-flex p-3">
                  <div className="test-match-button-main">
                    <div className="test-match-btn">
                      <p>2.36 24146.25</p>
                    </div>
                  </div>
                  <div className="text-match-button-main-color">
                    <div className="test-match-button-background">
                      <p>2.40 24146.25</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="divider"></hr>
            <div className="d-flex justify-content-between">
              <div>
                <h1 className="heading mb-3">Fancy Markets</h1>
                <hr class="withdrawal-center-line  border border-dark border-1 opacity-50 mt-1"></hr>
              </div>
              <span className="test-match-min">Min: 100 | Max: 10k</span>
            </div>
            <div className="test-match-ODD">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="inner-side p-2">Lunch Favourite (BAN vs SL) </p>
                </div>
                <div className="d-flex p-3">
                  <div className="test-match-button-main">
                    <div className="test-match-btn">
                      <p>1 </p>
                      <p>39</p>
                    </div>
                  </div>
                  <div className="text-match-button-main-color">
                    <div className="test-match-button-background">
                      <p>1 </p>
                      <p>42</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="test-match-center-line" />
              <div className="d-flex justify-content-between">
                <p className="inner-side p-2">Match 1st Ball Run</p>
                <div className="d-flex p-3">
                  <div className="test-match-button-main">
                    <div className="test-match-btn">
                      <p>1</p>
                      <p>130</p>
                    </div>
                  </div>
                  <div className="text-match-button-main-color">
                    <div className="test-match-button-background">
                      <p>1</p>
                      <p>200</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="test-match-center-line" />
              <div className="d-flex justify-content-between">
                <p className="inner-side p-2">Match Only 1st Over</p>
                <div className="d-flex p-3">
                  <div className="test-match-button-main">
                    <div className="test-match-btn">
                      <p>7</p>
                      <p>80</p>
                    </div>
                  </div>
                  <div className="text-match-button-main-color">
                    <div className="test-match-button-background">
                      <p>7</p>
                      <p>120</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="divider"></hr>
          </div>
        )}

        {activeButton === 2 && (
          <div>
            <div className="d-flex justify-content-between">
              <div>
                <h1 className="heading mb-3"> Match ODDS</h1>
                <hr class="withdrawal-center-line  border border-dark border-1 opacity-50 mt-1"></hr>
              </div>
              <span className="test-match-min">Min: 100 | Max: 10k</span>
            </div>
            <div className="test-match-ODD">
              <div className="d-flex justify-content-between align-items-center">
                <p className="inner-side p-4">Bangladesh</p>
                <div className="d-flex p-3">
                  <div className="test-match-button-main">
                    <div className="test-match-btn">
                      <p>1.72 24146.25</p>
                    </div>
                  </div>
                  <div className="text-match-button-main-color">
                    <div className="test-match-button-background">
                      <p>1.73 24146.25</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="test-match-center-line" />
              <div className="d-flex justify-content-between">
                <p className="inner-side p-4">Shri Lanka</p>
                <div className="d-flex p-3">
                  <div className="test-match-button-main">
                    <div className="test-match-btn">
                      <p>1.72 24146.25</p>
                    </div>
                  </div>
                  <div className="text-match-button-main-color">
                    <div className="test-match-button-background">
                      <p>1.73 24146.25</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="divider"></hr>{" "}
          </div>
        )}

        {activeButton === 3 && (
          <div>
            <div className="d-flex justify-content-between">
              <div>
                <h1 className="heading mb-3">Bookmaker</h1>
                <hr class="withdrawal-center-line  border border-dark border-1 opacity-50 mt-1"></hr>
              </div>
              <span className="test-match-min">Min: 100 | Max: 200k</span>
            </div>
            <div className="test-match-ODD">
              <div className="d-flex justify-content-between align-items-center">
                <p className="inner-side p-4">Bangladesh</p>
                <div className="d-flex p-3">
                  <div className="test-match-button-main">
                    <div className="test-match-btn">
                      <p>72 </p>
                      <p>200k</p>
                    </div>
                  </div>
                  <div className="text-match-button-main-color">
                    <div className="test-match-button-background">
                      <p>72 </p>
                      <p>200k</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="test-match-center-line" />
              <div className="d-flex justify-content-between">
                <p className="inner-side p-4">Shri Lanka</p>
                <div className="d-flex p-3">
                  <div className="test-match-button-main">
                    <div className="test-match-btn">
                      <p>71 </p>
                      <p>200k</p>
                      <span>Suspended</span>
                    </div>
                  </div>
                  <div className="text-match-button-main-color">
                    <div className="test-match-button-background">
                      <p>72 </p>
                      <p>200k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="divider"></hr>
          </div>
        )}

        {activeButton === 4 && (
          <div>
            <div className="d-flex justify-content-between">
              <div>
                <h1 className="heading mb-3">Fancy Markets</h1>
                <hr class="withdrawal-center-line  border border-dark border-1 opacity-50 mt-1"></hr>
              </div>
              <span className="test-match-min">Min: 100 | Max: 10k</span>
            </div>
            <div className="test-match-ODD">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="inner-side p-2">Lunch Favourite (BAN vs SL) </p>
                </div>
                <div className="d-flex p-3">
                  <div className="test-match-button-main">
                    <div className="test-match-btn">
                      <p>1 </p>
                      <p>39</p>
                    </div>
                  </div>
                  <div className="text-match-button-main-color">
                    <div className="test-match-button-background">
                      <p>1 </p>
                      <p>42</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="test-match-center-line" />
              <div className="d-flex justify-content-between">
                <p className="inner-side p-2">Match 1st Ball Run</p>
                <div className="d-flex p-3">
                  <div className="test-match-button-main">
                    <div className="test-match-btn">
                      <p>1</p>
                      <p>130</p>
                    </div>
                  </div>
                  <div className="text-match-button-main-color">
                    <div className="test-match-button-background">
                      <p>1</p>
                      <p>200</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="test-match-center-line" />
              <div className="d-flex justify-content-between">
                <p className="inner-side p-2">Match Only 1st Over</p>
                <div className="d-flex p-3">
                  <div className="test-match-button-main">
                    <div className="test-match-btn">
                      <p>7</p>
                      <p>80</p>
                    </div>
                  </div>
                  <div className="text-match-button-main-color">
                    <div className="test-match-button-background">
                      <p>7</p>
                      <p>120</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="divider"></hr>
          </div>
        )}
      </section>
      <section>
      <Footer />
      </section>
      <Bottom />
    </div>
  );
}

export default TestMatchs;
