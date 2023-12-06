import React, {useEffect,useState} from "react";
// css
import '../styles/landing.css'
// js
import CreateAccount from "./createaccount";
// icons

// asset 
import tasktifylogo from '../assets/tasktifylogo.png'
import compiled from '../assets/compiled-img.png'

const Landing = () => {

// useState
const [ create,setCreate ] = useState(false)

  return (
    <div className="main-landing">
        <div className={`create-modal ${create}`}>
            <CreateAccount/>
        </div>
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