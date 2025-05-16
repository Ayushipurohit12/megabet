import React, { useState } from "react";
import "../style.css/Home.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function Testmatch() {
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
              <div className="d-flex justify-content-center align-item-center p-2 gap-3">
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
            <p>Vs</p>
            <p>SHRI LANKA</p>
          </div>
          <div className="test-match-date">
            <p>30 MAR | 09:30 AM</p>
          </div>
          <div>
            <img
              src="src/assets/svg/Megabet777 _ Admin Panel - Google Chrome 11-04-2024 13_10_25 2.svg"
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <ul class="d-flex test-match-navbar">
              <li class="nav-item navbar-color">
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
              <div className="d-flex justify-content-between align-items-center">
                <h1 className=" test-match-heading m-0 p-0"> Match ODDS</h1>
                <span className="test-match-min">Min: 100 | Max: 10k</span>
              </div>
              <hr class="test-center-line  w-10 border border-dark border-1 opacity-50 mt-1"></hr>
              <div className="test-match-ODD">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="inner-side p-4">Bangladesh</p>
                  <div class="d-flex px-2 p-2 ">
                    <div class="test-match-button-main">
                      <div class="test-match-btn">
                        <p class="pt-1">1.72</p>
                        <p class="font mt-1"> 24146.25</p>
                      </div>
                    </div>
                    <div class="text-match-button-main-color">
                      <div class="test-match-button-background">
                        <p class="pt-1">1.73 </p>
                        <p class="font mt-1">24146.25</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="test-match-center-line" />
                <div className="d-flex justify-content-between">
                  <p className="inner-side p-4">Shri Lanka</p>
                  <div className="d-flex px-2 p-2 ">
                    <div className="test-match-button-main">
                      <div className="test-match-btn">
                        <p className="pt-1">1.72</p>
                        <p className="font mt-1"> 24146.25</p>
                      </div>
                    </div>
                    <div className="text-match-button-main-color">
                      <div className="test-match-button-background">
                        <p className="pt-1">1.73 </p>
                        <p className="font mt-1">24146.25</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="divider"></hr>

              <div className="d-flex justify-content-between align-items-center">
                <h1 className="test-match-heading m-0 p-0">Bookmaker</h1>
                <span className="test-match-min">Min: 100 | Max: 200k</span>
              </div>
              <hr class="test-center-line  border border-dark border-1 opacity-50 mt-1"></hr>
              <div className="test-match-ODD">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="inner-side px-4">Bangladesh</p>
                  <div className="d-flex p-2">
                    <div className="test-match-button-main">
                      <div className="test-match-btn">
                        <p className="pt-1">72 </p>
                        <p className="font mt-1">200k</p>
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
              <div className="d-flex justify-content-between align-items-center">
                <h1 className="test-match-heading m-0 p-0">Tied Match</h1>
                <span className="test-match-min">Min: 100 | Max: 10k</span>
              </div>
              <hr class="test-center-line  border border-dark border-1 opacity-50 mt-1"></hr>
              <div className="test-match-ODD">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="inner-side p-4">Yes</p>
                  <div className="d-flex px-2">
                    <div className="test-match-button-main">
                      <div className="test-match-btn">
                        <p className="pt-1">1.72 </p>
                        <p className="font mt-1"> 24146.25</p>
                      </div>
                    </div>
                    <div className="text-match-button-main-color">
                      <div className="test-match-button-background">
                        <p className="pt-1">1.73</p>
                        <p className="font mt-1"> 24146.25</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="test-match-center-line" />
                <div className="d-flex justify-content-between">
                  <p className="inner-side p-4">No</p>
                  <div className="d-flex px-2 pt-2">
                    <div className="test-match-button-main">
                      <div className="test-match-btn">
                        <p className="pt-1">2.36</p>
                        <p className="font mt-1"> 24146.25</p>
                      </div>
                    </div>
                    <div className="text-match-button-main-color">
                      <div className="test-match-button-background">
                        <p className="pt-1">2.40</p>

                        <p className="font mt-1"> 24146.25</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="divider"></hr>
              <div className="d-flex justify-content-between align-items-center">
                <h1 className="test-match-heading m-0 p-0">Fancy Markets</h1>
                <span className="test-match-min">Min: 100 | Max: 10k</span>
              </div>
              <hr class="test-center-line  w-11 border border-dark border-1 opacity-50 mt-1"></hr>
              <div className="test-match-ODD">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="inner-side pt-2 px-3">
                      Lunch Favourite (BAN vs SL){" "}
                    </p>
                  </div>
                  <div className="d-flex p-2">
                    <div className="test-match-button-main">
                      <div className="test-match-btn">
                        <p className="pt-1">1 </p>
                        <p className="font mt-1">39</p>
                      </div>
                    </div>
                    <div className="text-match-button-main-color">
                      <div className="test-match-button-background">
                        <p className="pt-1">1 </p>
                        <p className="font mt-1">42</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="test-match-center-line" />
                <div className="d-flex justify-content-between">
                  <p className="inner-side pt-4 px-3">Match 1st Ball Run</p>
                  <div className="d-flex p-2">
                    <div className="test-match-button-main">
                      <div className="test-match-btn">
                        <p className="pt-1">1</p>
                        <p className="font mt-1">130</p>
                      </div>
                    </div>
                    <div className="text-match-button-main-color">
                      <div className="test-match-button-background">
                        <p className="pt-1">1</p>
                        <p className="font mt-1">200</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="test-match-center-line" />
                <div className="d-flex justify-content-between">
                  <p className="inner-side pt-4 px-3">Match Only 1st Over</p>
                  <div className="d-flex p-2">
                    <div className="test-match-button-main">
                      <div className="test-match-btn">
                        <p className="pt-1">7</p>
                        <p className="font mt-1">80</p>
                      </div>
                    </div>
                    <div className="text-match-button-main-color">
                      <div className="test-match-button-background">
                        <p className="pt-1">7</p>
                        <p className="font mt-1">120</p>
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
              <div class="d-flex justify-content-between align-items-center">
                <h1 class="test-match-heading m-0  p-0"> Match ODDS</h1>
                <span class="test-match-min">Min: 100 | Max: 10k</span>
              </div>
              <hr class="test-center-line  w-10 border border-dark border-1 opacity-50 mt-1" />{" "}
              <div class="test-match-ODD">
                <div class="d-flex justify-content-between align-items-center">
                  <p class="inner-side px-4">Bangladesh</p>
                  <div class="d-flex  p-2">
                    <div class="test-match-button-main">
                      <div class="test-match-btn">
                        <p className="pt-1">1.72 </p>
                        <p className="font mt-1">24146.25</p>
                      </div>
                    </div>
                    <div class="text-match-button-main-color">
                      <div class="test-match-button-background">
                        <p className="pt-1">1.73</p>
                        <p className="font mt-1"> 24146.25</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="test-match-center-line" />
                <div class="d-flex justify-content-between">
                  <p class="inner-side p-4">Shri Lanka</p>
                  <div class="d-flex px-2 p-2 ">
                    <div class="test-match-button-main">
                      <div class="test-match-btn">
                        <p className="pt-1">1.72 </p>
                        <p className="font mt-1">24146.25</p>
                      </div>
                    </div>
                    <div class="text-match-button-main-color">
                      <div class="test-match-button-background">
                        <p className="pt-1">1.73 </p>
                        <p className="font mt-1">24146.25</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeButton === 3 && (
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <h1 className="test-match-heading m-0 p-0">Bookmaker</h1>
                <span className="test-match-min">Min: 100 | Max: 200k</span>
              </div>
              <hr class="test-center-line  border border-dark border-1 opacity-50 mt-1"></hr>
              <div className="test-match-ODD">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="inner-side px-4">Bangladesh</p>
                  <div className="d-flex p-2">
                    <div className="test-match-button-main">
                      <div className="test-match-btn">
                        <p className="pt-1">72 </p>
                        <p className="font mt-1">200k</p>
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
            </div>
          )}

          {activeButton === 4 && (
            <div>
              <div className="d-flex justify-content-between">
                <div>
                  <h1 className="test-match-heading mb-3 p-0">Fancy Markets</h1>
                  <hr class="withdrawal-center-line  border border-dark border-1 opacity-50 mt-1"></hr>
                </div>
                <span className="test-match-min">Min: 100 | Max: 10k</span>
              </div>
              <div className="test-match-ODD">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="inner-side pt-2 px-3">
                      Lunch Favourite (BAN vs SL){" "}
                    </p>
                  </div>
                  <div className="d-flex p-2">
                    <div className="test-match-button-main">
                      <div className="test-match-btn">
                        <p className="pt-1">1 </p>
                        <p className="font mt-1">39</p>
                      </div>
                    </div>
                    <div className="text-match-button-main-color">
                      <div className="test-match-button-background">
                        <p className="pt-1">1 </p>
                        <p className="font mt-1">42</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="test-match-center-line" />
                <div className="d-flex justify-content-between">
                  <p className="inner-side pt-4 px-3">Match 1st Ball Run</p>
                  <div className="d-flex p-2">
                    <div className="test-match-button-main">
                      <div className="test-match-btn">
                        <p className="pt-1">1</p>
                        <p className="font mt-1">130</p>
                      </div>
                    </div>
                    <div className="text-match-button-main-color">
                      <div className="test-match-button-background">
                        <p className="pt-1">1</p>
                        <p className="font mt-1">200</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="test-match-center-line" />
                <div className="d-flex justify-content-between">
                  <p className="inner-side pt-4 px-3">Match Only 1st Over</p>
                  <div className="d-flex p-2">
                    <div className="test-match-button-main">
                      <div className="test-match-btn">
                        <p className="pt-1">7</p>
                        <p className="font mt-1">80</p>
                      </div>
                    </div>
                    <div className="text-match-button-main-color">
                      <div className="test-match-button-background">
                        <p className="pt-1">7</p>
                        <p className="font mt-1">120</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        <section>
      <Footer />
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
      </div>
    </>
  );
}

export default Testmatch;
