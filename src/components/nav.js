import React, {useState,useEffect} from 'react'
// css
import './styles/nav.css'
// asset
import tasktifylogo from './assets/tasktifylogo.png'

const Nav = () => {

  // useState
const [ navDown, setNavdown ] = useState(false);
const [ navList, setNavlist ] = useState(false)

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
              <button>Login / Signup</button>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Nav