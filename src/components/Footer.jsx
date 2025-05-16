import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer px-2">
        <hr />
        <button>
          <h1>Helpline Number</h1>
          <img src="src/assets/svg/ion_logo-whatsapp.svg" />
          <span>+91 880 046 0635</span>
        </button>
      </div>
      <div className="footer-content">
        <p>Responsible Gambling</p>
        <p>Terms & Conditions</p>
        <p>General Policy</p>
        <p>
          <span>About Us</span>
          <img src="src/assets/svg/Vector 431.svg" />
        </p>
      </div>
      <div className="social-icons d-flex justify-content-center align-item-center ">
        <img role="button" src="src/assets/svg/facebook.svg" className="m-2" />
        <img role="button" src="src/assets/svg/Twitter.svg" className="m-2" />
        <img role="button" src="src/assets/svg/instagram.svg" className="m-2" />
        <img role="button" src="src/assets/svg/Linkedin.svg" className="m-2" />
      </div>
      <hr />
      <div className="bonus-casino-footer">
        <p className="m-0">
          License info BLUE SAPPHIRE N.V. operates in curacao, with a company
          Registration No: 149875, and registered address is Heelsumstraat 51,
          E-COMMERCE PARK, ORION WEG, 5C, WILLEMSTAD, CURACAO. The company
          operates under the General Governor Of Curacao Gaming License under
          the number 8048/JAZ2019-038{" "}
        </p>
        <p>© Copyright 2022. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
