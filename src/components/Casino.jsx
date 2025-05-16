import React, { useState } from "react";
import "../style.css/Home.css";
import { Link } from "react-router-dom";
import Casinogaming from "./Casinogaming";
import Poker from "./Poker";
import View from "./View";
import Casinoswiper from "./Casinoswiper";
import AllProviders from "./Modals/AllProviders";
import Bottom from "./Bottom";
import Footer from "./Footer";
function Casino() {
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
        <section className="casino-main">
          <Casinoswiper />
          <div className="casino-content">
            <div className="casino-providers d-flex  justify-content-between align-items-center ">
              <p onClick={() => setModalOpen(true)} className="m-0">
                All Providers
              </p>
              <AllProviders
                open={modalOpen}
                onClose={() => setModalOpen(false)}
              />
              <img src="src/assets/svg/Vector (6).svg" />
            </div>
            <Casinogaming />
            <div>
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="top-game-list ">
                    <p className="m-0">Top Games</p>
                    <hr class="withdrawal-center-line  border border-dark border-1 opacity-50 mt-3"></hr>
                  </div>
                  <Link className="view">view all</Link>
                </div>
                <View />
              </div>
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="top-game-list m-0">
                    <p>Poker</p>
                    <hr class="withdrawal-center-line  border border-dark border-1 opacity-50 mt-1"></hr>
                  </div>
                  <Link className="view">view all</Link>
                </div>
                <Poker />
              </div>
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="top-game-list">
                    <p>Baccarat</p>
                    <hr class="withdrawal-center-line  border border-dark border-1 opacity-50 mt-1"></hr>
                  </div>
                  <Link className="view">view all</Link>
                </div>
                <Poker />
              </div>
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="top-game-list m-0">
                    <p>Blacjack</p>
                    <hr class="withdrawal-center-line  border border-dark border-1 opacity-50 mt-1"></hr>
                  </div>
                  <Link className="view">view all</Link>
                </div>
                <Poker />
              </div>
            </div>
          </div>
        </section>
        <section>
         <Footer />
        </section>
       <Bottom />
      </div>
    </>
  );
}

export default Casino;
