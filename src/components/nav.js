import React, {useState,useEffect} from 'react'
// css
import './styles/nav.css'
// asset
import tasktifylogo from './assets/tasktifylogo.png'
import CreateAcc from './pages/create-acc';
// icons

const Nav = () => {

  // useState
const [ navDown, setNavdown ] = useState(false);
const [ create,setCreate ] = useState(false);
// useEffect
useEffect(() => {
  setTimeout(() => {
    setNavdown(true)
  }, 100);

  return () => {

  }
}, [])
const openCreate = () => {
  setCreate(true)
}
const closeModal = () => {
  setCreate(false)
}
  return (
    <div className={`nav-main ${navDown}`}>
      <div className={`create-modal ${create}`}>
        <CreateAcc/>
        <div className="close-back" onClick={closeModal}></div>
      </div>
      <div className="nav-main-container">
        <nav>
          <div className="home-logo">
              <img src={tasktifylogo} alt="" />
              <p>Tasktify</p>
          </div>
          <div className="navlist">
            <ul>
              <li>Explore</li>
              <li>Locations</li>
              <li>Services</li>
              <button onClick={openCreate}>Login / Signup</button>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Nav