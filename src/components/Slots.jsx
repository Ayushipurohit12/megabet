import React from "react";
import { Link } from "react-router-dom";
import "../style.css/Home.css";
import Slotswiper from "./Slotswiper";
import Footer from "./Footer";
import Bottom from "./Bottom";

function Slots() {
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
        <section className="slots">
          {/* <img src="src/assets/svg/15717680_SL_120319_25700_11 1.svg" /> */}
          <Slotswiper />
          <div className="slots-frame d-flex align-items-center gap-3">
            <p>Slots</p>
            <img
              src="src/assets/svg/noto-v1_slot-machine.svg"
              className="slots-icon"
            />
          </div>
          <div className="slots-content ">
            <div className="d-flex gap-3 w-100">
              <div className="slot-image">
                <img src="src/assets/svg/Rectangle 381.svg" />
                <p>RT Slot Lob...</p>
              </div>
              <div className="slot-image">
                <img src="src/assets/svg/Rectangle 382.svg" />
                <p>RT Slot Lob...</p>
              </div>
            </div>
            <div className="d-flex gap-3">
              <div className="slot-image">
                <img src="src/assets/svg/Rectangle 383.svg" />
              </div>
              <div  className="slot-image">
                <img src="src/assets/svg/Rectangle 384.svg" />
              </div>
            </div>
            <div className="d-flex gap-3 pt-3">
              <div  className="slot-image">
                <img src="src/assets/svg/Rectangle 381.svg" />
                <p>RT Slot Lob...</p>
              </div>
              <div  className="slot-image">
                <img src="src/assets/svg/Rectangle 382.svg" />
                <p>RT Slot Lob...</p>
              </div>
            </div>
            <div className="d-flex gap-3 pt-3">
              <div  className="slot-image">
                <img src="src/assets/svg/Rectangle 383.svg" />
              </div>
              <div  className="slot-image">
                <img src="src/assets/svg/Rectangle 384.svg" />
              </div>
            </div>
            <div className="d-flex gap-3 pt-3">
              <div  className="slot-image">
                <img src="src/assets/svg/Rectangle 381.svg" />
                <p>RT Slot Lob...</p>
              </div>
              <div  className="slot-image">
                <img src="src/assets/svg/Rectangle 382.svg" />
                <p>RT Slot Lob...</p>
              </div>
            </div>
            <div className="d-flex gap-3 pt-3">
              <div  className="slot-image">
                <img src="src/assets/svg/Rectangle 383.svg" />
              </div>
              <div  className="slot-image">
                <img src="src/assets/svg/Rectangle 384.svg" />
              </div>
            </div>
          </div>
      <Footer />
        </section>
       <Bottom />
      </div>
    </>
  );
}

export default Slots;
