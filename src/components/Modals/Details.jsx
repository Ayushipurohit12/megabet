import React from 'react'
import Modal from 'react-responsive-modal'

const Details = ({ onClose, open }) =>{
  return (
    <Modal open={open} onClose={onClose} center>
    <div className="select-account-main">
 <h1 className='details-heading p-2' >Details</h1>
 <div class=" d-flex align-items-center justify-content-center details-list ">
 <p className='m-0'>Bonus amount :</p>
 <span>50</span>
  </div>
 <div class=" d-flex align-items-center justify-content-center details-list">
 <p className='m-0'>Expiry date :</p>
 <span>4/30/2024</span>
</div>
<div class=" d-flex align-items-center justify-content-center details-list">
 <p className='m-0'>Coefficient WR :</p>
 <span>10</span>
</div>
<div class=" d-flex align-items-center justify-content-center details-list">
 <p className='m-0'>Fulfilled WR :</p>
 <span>10</span>
</div>
<div class=" d-flex align-items-center justify-content-center details-list">
 <p className='m-0'>Remaining WR :</p>
 <span>5000</span>
</div>
<div class=" d-flex align-items-center justify-content-center details-list">
 <p className='m-0'>Total WR :</p>
 <span>5000</span>
</div>
        </div>
    </Modal>
  )
}

export default Details