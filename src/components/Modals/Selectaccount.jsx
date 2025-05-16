import React from "react";
import Modal from "react-responsive-modal";
const Selectaccount = ({ onClose, open }) => {
  return (
    <Modal onClose={onClose} open={open} center>
      <div className="select-account-main">
        <h1 className="select-heading">Select Your Account</h1>
        <div class="form-check text-center p-2">
          <input
            class="form-check-input float-md-none"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            class="form-check-label select-account-content"
            for="flexRadioDefault1"
          >
            1234567890
          </label>
        </div>
        <div class="form-check text-center p-2">
          <input
            class="form-check-input float-md-none"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label
            class="form-check-label select-account-content"
            for="flexRadioDefault2"
          >
            4657879132
          </label>
        </div>
        <div class="form-check text-center p-2">
          <input
            class="form-check-input float-md-none"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label
            class="form-check-label select-account-content"
            for="flexRadioDefault2"
          >
            8879465632
          </label>
        </div>
        <div className="d-flex justify-content-center align-items-center p-4">
          <button className="select-account-button">Done</button>
        </div>
      </div>
    </Modal>
  );
};

export default Selectaccount;
