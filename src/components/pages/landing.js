import React, {useEffect,useState} from "react";
// css
import '../styles/landing.css'
// js

// asset 
import tasktifylogo from '../assets/tasktifylogo.png'
import compiled from '../assets/compiled-img.png'

const Landing = () => {

  return (
    <div className="main-landing">
        <div className="landing-page">
            <div className="get-start">
                <div className="tasktifylogo">
                    <img src={tasktifylogo} alt="" />
                </div>
                <h1>Tasktify</h1>
                <div className="motto">
                    <p>task done, pay fast</p>
                </div>
                <div className="getstart">
                    <button>Get Started</button>
                </div>
            </div>
            <div className="onscroll-imgs">
                <img src={compiled} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Landing