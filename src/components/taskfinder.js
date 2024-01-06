import React from 'react'
// css
import './styles/taskfinder.css'
// assets
import taskerProf from './assets/Dusk.jpg'
// icon
import { FaSearch,FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {
  IoSendOutline,
  IoRibbon,
  IoClose
} from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { TiStarFullOutline } from "react-icons/ti";
import { FaCheck } from "react-icons/fa6";

const Taskfinder = () => {
 
  return (
    <div className="task-finder">
      <div className="task-finder-container">
        <div className="taskfinder-header">
          <FaSearch id='searchIcon'/>
          <h1>Task Finder</h1>
        </div>
        <div className="taskfinder-content">
          <div className="tskfinderLeft">
          <div className="taskfinder-searchbar">
            <div className="searchbar">
              <h1>Search task</h1>
              <section>
                <input type="text" />
                <IoSendOutline id='sendIcon'/>
              </section>
            </div>
            <div className="fnder-filter">
              <h1>Filter by:</h1>
              <section>
                <li>Nearby</li>
                <li>Skill</li>
                <li>Rate</li>
              </section>
            </div>
          </div>
            <p>Filter by: <span>Skill</span></p>
            <div className="taskFiltered">
              <li>
                <section>
                  <div className="tasker-info">
                    <h1>Delivery</h1>
                    <h2>Posted by <span>Zach Merch</span><RiVerifiedBadgeFill id='verified'/></h2>
                    <p>Zach Merch posted <span>154 Task</span></p>
                  </div>
                  <div className="tasker-description">
                    <h1>Task Description</h1>
                    <div className="tsk-description-content">
                      <h1>Deliver a package of food supplements in Quezon City Hall</h1>
                      <p>Payment Method: <span>Bank Transfer</span></p>
                    </div>
                  </div>
                </section>
                <section className='btns-container'>
                  <div className="tsk-location">
                    <section>
                      <p>Location:</p>
                      <p>Rate:</p>
                      <p>Skill:</p>
                    </section>
                    <section>
                      <p>Quezon City</p>
                      <p>₱300</p>
                      <p>Delivery</p>
                    </section>
                  </div>
                  <div className="tsk-info-btn">
                    <button id='report'>Report Task</button>
                    <button id='take'>Take Task</button>
                  </div>
                </section>
              </li>
              <li>
                <section>
                  <div className="tasker-info">
                    <h1>Delivery</h1>
                    <h2>Posted by <span>Zach Merch</span></h2>
                    <p>Zach Merch posted <span>154 Task</span></p>
                  </div>
                  <div className="tasker-description">
                    <h1>Task Description</h1>
                    <div className="tsk-description-content">
                      <h1>Deliver a package of food supplements in Quezon City Hall</h1>
                      <p>Payment Method: <span>Bank Transfer</span></p>
                    </div>
                  </div>
                </section>
                <section className='btns-container'>
                  <div className="tsk-location">
                    <section>
                      <p>Location:</p>
                      <p>Rate:</p>
                      <p>Skill:</p>
                    </section>
                    <section>
                      <p>Quezon City</p>
                      <p>₱300</p>
                      <p>Delivery</p>
                    </section>
                  </div>
                  <div className="tsk-info-btn">
                    <button id='report'>Report Task</button>
                    <button id='take'>Take Task</button>
                  </div>
                </section>
              </li>
              <li>
                <section>
                  <div className="tasker-info">
                    <h1>Delivery</h1>
                    <h2>Posted by <span>Zach Merch</span></h2>
                    <p>Zach Merch posted <span>154 Task</span></p>
                  </div>
                  <div className="tasker-description">
                    <h1>Task Description</h1>
                    <div className="tsk-description-content">
                      <h1>Deliver a package of food supplements in Quezon City Hall</h1>
                      <p>Payment Method: <span>Bank Transfer</span></p>
                    </div>
                  </div>
                </section>
                <section className='btns-container'>
                  <div className="tsk-location">
                    <section>
                      <p>Location:</p>
                      <p>Rate:</p>
                      <p>Skill:</p>
                    </section>
                    <section>
                      <p>Quezon City</p>
                      <p>₱300</p>
                      <p>Delivery</p>
                    </section>
                  </div>
                  <div className="tsk-info-btn">
                    <button id='report'>Report Task</button>
                    <button id='take'>Take Task</button>
                  </div>
                </section>
              </li>
              <li>
                <section>
                  <div className="tasker-info">
                    <h1>Delivery</h1>
                    <h2>Posted by <span>Zach Merch</span></h2>
                    <p>Zach Merch posted <span>154 Task</span></p>
                  </div>
                  <div className="tasker-description">
                    <h1>Task Description</h1>
                    <div className="tsk-description-content">
                      <h1>Deliver a package of food supplements in Quezon City Hall</h1>
                      <p>Payment Method: <span>Bank Transfer</span></p>
                    </div>
                  </div>
                </section>
                <section className='btns-container'>
                  <div className="tsk-location">
                    <section>
                      <p>Location:</p>
                      <p>Rate:</p>
                      <p>Skill:</p>
                    </section>
                    <section>
                      <p>Quezon City</p>
                      <p>₱300</p>
                      <p>Delivery</p>
                    </section>
                  </div>
                  <div className="tsk-info-btn">
                    <button id='report'>Report Task</button>
                    <button id='take'>Take Task</button>
                  </div>
                </section>
              </li>
            </div>
          </div>
          <div className="tskfinderRight">
            <div className="taksFinder-profile">
              <div className="tskFndr-header">
                <h1>Your Profile</h1>
              </div>
              <div className="profile-tskfinder">
                <section>
                  <img src={taskerProf} alt="" />
                </section>
                <section>
                  <div className='achivement-profile-tskfinder'>
                    <IoRibbon id='achiveIcon'/>
                    <p>Weekly Top Tasker</p>
                    <h1>Miguel Santos</h1>
                    <h2>Name</h2>
                    <h1>₱150 - ₱200 / hr</h1>
                    <h2>Rate</h2>
                    <h1>Verified Tasker</h1>
                    <h2>Verified</h2>
                  </div>
                </section>
              </div>
              <div className="profile-skill">
                <h2>Skill</h2>
                <section className='skillset'>
                  <ul>
                    <h1>Skill</h1>
                    <li>Delivery</li>
                    <li>Delivery</li>
                    <li>Delivery</li>
                    <li>Delivery</li>
                    <li>Delivery</li>
                  </ul>
                  <ul>
                    <h1>Expertise</h1>
                    <div className="stars">
                      <li><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /></li>
                      <li><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /></li>
                      <li><TiStarFullOutline /><TiStarFullOutline /></li>
                      <li><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /></li>
                      <li><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /></li>
                    </div>
                  </ul>
                </section>
                <h2>Description</h2>
                <section className='prf-descrip'>
                  <p>I’m just a student that want some money to spend</p>
                </section>
              </div>
              <section className='prf-reviews'>
                <p><TiStarFullOutline id='starIcon'/> <span> 100% Positive Reviews</span></p>
                <p><FaCheck  id='checkIcon'/> <span> 1242 Task done</span></p>
              </section>
              <section className='prf-contact'>
                <p><FaLocationDot id='locationIcon'/>Quezon City, NCR</p>
                <p><FaPhone id='phoneIcon'/>+6395 111 5478</p>
              </section>
              <button>Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Taskfinder