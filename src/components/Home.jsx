import React from "react";
import { Link } from "react-router-dom";
import "../style.css/Home.css";
import CenterMode from "./CenterMode";
import Gaming from "./Gaming";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <div className="main">
        <div className="navbar">
          <img src="src/assets/Logo.png" className="logo-image" />
          <div class="arrow-box">
            <div class="arrow arrow04">
              <Link to="/login">
                <p>
                  <button>Login</button>
                </p>
              </Link>
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
          <div class="filter">
            <div className=" d-flex align-items-center">
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
        </section>
        <Footer />
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
export default Home;
