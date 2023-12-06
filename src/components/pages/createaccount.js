import React from 'react'
// css
import '../styles/create-modal.css'
// icons
import { FcGoogle } from "react-icons/fc";

const CreateAccount = () => {
  return (
    <div className="create-account">
        <div className="account">
            <h1>Tasktify</h1>
            <div className="motto-modal">
                <p>task done, pay fast</p>
            </div>
            <div className="use-google-btn">
                <button><FcGoogle id='google-icon'/>Continue using Google Account</button>
            </div>
        </div>
    </div>
  )
}

export default CreateAccount