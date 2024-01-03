import React from 'react'
// css
import '../styles/search.css'
// assets
import tsktfyLogo from '../assets/tasktifylogo.png'
import taskerIco from '../assets/deliver.png'
// icon
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="search">
      <div className="search-task">
        <div className="main-search">
          <div className="banner">
            <section className='bannerLeft'>
              <div className="add-info">
                <h1>How do you like your garden?</h1>
                <p>How do you like your garden? Tasktify helps you to achieve your daily  goals. It assist you for rhe things that requires man power</p>
              </div>
            </section>
            <section className='bannerRight'>
              <div className="bnnrR-header">
                <div className="bnnrR-logo">
                  <img src={tsktfyLogo} alt="" />
                  <h1>Tasktify</h1>
                </div>
                <p>Start your Day for Doing Great. Connect to People to achieve more</p>
              </div>
              <div className="bnnrR-content">
                <div className="conversation">
                  <div className="client">
                    <section>
                      <h1>Client</h1>
                      <p>Can you assist me at...</p>
                    </section>
                  </div>
                  <div className="tasker">
                    <section>
                      <h1>Tasker</h1>
                      <p>Sure, How can I assist you?</p>
                    </section>
                  </div>
                </div>
                <div className="taskerImg">
                  <img src={taskerIco} alt="" />
                </div>
              </div>
            </section>
          </div>
          <div className="search-task-bar">
            <div className="searchTask-container">
              <div className="task-finder-searchbar">
                <FaSearch id='icon'/>
                <input type="text" placeholder='Search task here..'/>
              </div>
              <div className="search-btn">
                <button>Find task to do</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search