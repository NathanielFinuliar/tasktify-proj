import React, {useState,useEffect} from 'react'
// css
import './styles/nav.css'
import './styles/create-modal.css'
// asset
import tasktifylogo from './assets/tasktifylogo.png'
// icons
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";

const Nav = () => {

  // useState
const [ navDown, setNavdown ] = useState(false);
const [ create,setCreate ] = useState(false)

const createAccount = () => {
    setCreate(true)
}
const closeCreate = () => {
    setCreate(false)
}
// useEffect
useEffect(() => {
  setTimeout(() => {
    setNavdown(true)
  }, 100);

  return () => {

  }
}, [])

  return (
    <div className={`nav-main ${navDown}`}>
      <div className={`create-modal ${create}`}>
        <div className={`create-account ${create}`}>
            <div className="close-btn">
                <IoClose id='close-button' onClick={closeCreate}/>
            </div>
            <div className="account">
                <h1>Tasktify</h1>
                <div className="motto-modal">
                    <p>task done, pay fast</p>
                </div>
                <div className="use-google-btn">
                    <button><FcGoogle id='google-icon'/>Continue using Google Account</button>
                </div>
                <p>Login in Tasktify Account</p>
                <div className="input-login">
                <input type="text" placeholder='Username'/>
                <input type="text" placeholder='Password'/>
                <button>Login</button>
                </div>
                <p>Don't have Tasktify Account?</p>
                <li>Create Account Now</li>
                <div className="create-foot">
                <p>Connect with us at:</p>
                <div className="foot-icons">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
                    <img src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="" />
                </div>
                </div>
            </div>
        </div>
        <div className="close-outside" onClick={closeCreate}></div>
      </div>
      <div className="nav-main-container">
        <nav>
          <div className="home-logo">
              <img src={tasktifylogo} alt="" />
              <p>Tasktify</p>
          </div>
          <div className="navlist">
            <ul>
              <li>Projects</li>
              <li>Designs</li>
              <li>Contacts</li>
              <button onClick={createAccount}>Login / Signup</button>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Nav