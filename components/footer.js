import React,{useState} from 'react'
// css
import './styles/footer.css'
// assets
import tasktifylogo from './assets/tasktifylogo.png'
// icon
import { 
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare  
} from "react-icons/fa";
// js file
import CreateAcc from './pages/create-acc';

const Footer = () => {

// usestate
const [start,setStart] = useState(false)
// open create acc
const startNow = () => {
  setStart(true)
}
const closestartNow = () => {
  setStart(false)
}

  return (
    <div className="footer">
      <div className={`start-now ${start}`}>
        <CreateAcc/>
        <div className="autoClose" onClick={closestartNow}></div>
      </div>
        <div className="main-footer">
            <div className="footer-container">
                <div className="footer-header">
                  <section>
                    <h1>Are you ready to be productive?</h1>
                    <p>Start your task now!</p>
                  </section>
                  <button onClick={startNow}>Start Now</button>
                </div>
                <div className="footer-content">
                  <section id='logo-tasktify'>
                    <img src={tasktifylogo} alt="" />
                    <h1>Tasktify</h1>
                  </section>
                  <section>
                    <div className="footer-linkings-content">
                      <ul>
                        <h1>Contacts</h1>
                        <hr />
                        <li>Contact No./email here</li>
                        <li>Contact No./email here</li>
                        <li>Contact No./email here</li>
                        <li>Contact No./email here</li>
                      </ul>
                      <ul>
                        <h1>Tasklist</h1>
                        <hr />
                        <li>Gardener</li>
                        <li>Delivery</li>
                        <li>Home Decor</li>
                        <li>Cook</li>
                        <button>See more...</button>
                      </ul>
                      <ul>
                        <h1>Locations</h1>
                        <hr />
                        <li>Manila</li>
                        <li>Pangasinan</li>
                        <li>Marikina</li>
                        <li>Pasay</li>
                        <button>See more...</button>
                      </ul>
                      <ul>
                        <h1>About Us</h1>
                        <hr />
                        <li>Terms and Conditions</li>
                        <li>Legalities and Restrictions</li>
                        <li>What is Tasktify?</li>
                        <li>Tasktify Team</li>
                        <button>See more...</button>
                      </ul>
                    </div>
                  </section>
                  <section id="socialLinks">
                    <h1>Follow us in:</h1>
                    <div className="social-links">
                      <a href=""><FaFacebookSquare /></a>
                      <a href=""><FaTwitterSquare  /></a>
                      <a href=""><FaInstagramSquare   /></a>
                    </div>
                  </section>
                </div>
                <p>Tasktify • All Rights Reserve 2023</p>
            </div>
        </div>
    </div>
  )
}

export default Footer