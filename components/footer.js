import React from 'react'
// css
import './styles/footer.css'
// assets
import tasktifylogo from './assets/tasktifylogo.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="main-footer">
            <div className="footer-container">
                <div className="footer-header">
                    <section>
                      <h1>Are you ready to be productive?</h1>
                      <p>Start your task now!</p>
                    </section>
                    <button>Start Now</button>
                </div>
                <div className="footer-content">
                  <section id='logo-tasktify'>
                    <img src={tasktifylogo} alt="" />
                    <h1>Tasktify</h1>
                  </section>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer