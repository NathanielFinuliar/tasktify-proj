import React from 'react'
// css
import '../styles/SuccessModal.css'
// icon
import { FaCheck } from "react-icons/fa";

const SuccessModal = () => {
  return (
    <div className="sc-container">
        <div className="sc-content">
            <h1><FaCheck id='successCheck'/></h1>
            <p>Your task was successfully created</p>
            <div className="closeSuccess">
                <button>Okay</button>
            </div>
            <a href="">View task</a>
        </div>
    </div>
  )
}

export default SuccessModal