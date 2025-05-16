import React from "react";
import Modal from "react-responsive-modal";
const AllProviders = ({ onClose, open }) => {
  return (
    <>
      <Modal onClose={onClose} open={open}>
        <div className="providers-main">
          <div className="all-providers">
            <div className="d-flex  align-items-center justify-content-center">
              <p className="providers-heading">Providers 20</p>
            </div>
            <div className="providers-content">
              <div className="providers-btn">
                <button>All providers</button>
                <button>Lorem ipsum</button>
              </div>
              <div className="providers-btn">
                <button>Lorem ipsum</button>
                <button>Lorem ipsum</button>
              </div>
              <div className="providers-btn">
                <button>Lorem ipsum</button>
                <button>Lorem ipsum</button>
              </div>{" "}
              <div className="providers-btn">
                <button>Lorem ipsum</button>
                <button>Lorem ipsum</button>
              </div>{" "}
              <div className="providers-btn">
                <button>Lorem ipsum</button>
                <button>Lorem ipsum</button>
              </div>{" "}
              <div className="providers-btn">
                <button>Lorem ipsum</button>
                <button>Lorem ipsum</button>
              </div>{" "}
              <div className="providers-btn">
                <button>Lorem ipsum</button>
                <button>Lorem ipsum</button>
              </div>
              <div className="providers-btn">
                <button>Lorem ipsum</button>
                <button>Lorem ipsum</button>
              </div>
              <div className="providers-btn">
                <button>Lorem ipsum</button>
                <button>Lorem ipsum</button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AllProviders;
