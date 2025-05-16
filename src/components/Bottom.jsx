import React from 'react'
import { Link } from 'react-router-dom'

function Bottom() {
  return (
    <div className="bottom-navbar">
    <div className="d-flex align-items-center justify-content-around">
      <Link to="/loginhome">
        <button>
          <img src="src/assets/svg/home-2.svg" className="bottom-image" />
          Home
        </button>
      </Link>
      <Link to="/casino">
        <img src="src/assets/svg/Group 104.svg" />
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
        <img src="src/assets/svg/Group 106.svg" />
      </Link>
    </div>
  </div>
  )
}

export default Bottom