import React from 'react'
// css
import '../styles/worklist.css'
// asset
import workimg from '../assets/gardener.jpg'
import logo from '../assets/tasktifylogo.png'

const Popular = () => {
  return (
    <div className="popular-work">
        <div className="worklist-container">
            <div className="worklist-header">
                <ul>
                    <li>Popular</li>
                    <li>New</li>
                    <li>Nearby</li>
                </ul>
            </div>
            <div className="worklist-content">
                <section>
                    <li>
                        <div className="listed-work">
                            <div className="listed-head">
                                <img src={logo} alt="" />
                            </div>
                            <img src={workimg} className='workimg' alt="" />
                            <div className="listing-foot">
                                <div className="foot-titles">
                                    <h1>Gardener</h1>
                                    <p>₱12.00 - ₱30.00</p>
                                </div>
                                <div className="listing-btns">
                                    <button id='hire'>Hire</button>
                                    <button id='take'>Take</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="listed-work">
                            <div className="listed-head">
                                <img src={logo} alt="" />
                            </div>
                            <img src={workimg} className='workimg' alt="" />
                            <div className="listing-foot">
                                <div className="foot-titles">
                                    <h1>Gardener</h1>
                                    <p>₱12.00 - ₱30.00</p>
                                </div>
                                <div className="listing-btns">
                                    <button id='hire'>Hire</button>
                                    <button id='take'>Take</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="listed-work">
                            <div className="listed-head">
                                <img src={logo} alt="" />
                            </div>
                            <img src={workimg} className='workimg' alt="" />
                            <div className="listing-foot">
                                <div className="foot-titles">
                                    <h1>Gardener</h1>
                                    <p>₱12.00 - ₱30.00</p>
                                </div>
                                <div className="listing-btns">
                                    <button id='hire'>Hire</button>
                                    <button id='take'>Take</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="listed-work">
                            <div className="listed-head">
                                <img src={logo} alt="" />
                            </div>
                            <img src={workimg} className='workimg' alt="" />
                            <div className="listing-foot">
                                <div className="foot-titles">
                                    <h1>Gardener</h1>
                                    <p>₱12.00 - ₱30.00</p>
                                </div>
                                <div className="listing-btns">
                                    <button id='hire'>Hire</button>
                                    <button id='take'>Take</button>
                                </div>
                            </div>
                        </div>
                    </li>
                </section>
                <section>
                    <li>
                        <div className="listed-work">
                            <div className="listed-head">
                                <img src={logo} alt="" />
                            </div>
                            <img src={workimg} className='workimg' alt="" />
                            <div className="listing-foot">
                                <div className="foot-titles">
                                    <h1>Gardener</h1>
                                    <p>₱12.00 - ₱30.00</p>
                                </div>
                                <div className="listing-btns">
                                    <button id='hire'>Hire</button>
                                    <button id='take'>Take</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="listed-work">
                            <div className="listed-head">
                                <img src={logo} alt="" />
                            </div>
                            <img src={workimg} className='workimg' alt="" />
                            <div className="listing-foot">
                                <div className="foot-titles">
                                    <h1>Gardener</h1>
                                    <p>₱12.00 - ₱30.00</p>
                                </div>
                                <div className="listing-btns">
                                    <button id='hire'>Hire</button>
                                    <button id='take'>Take</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="listed-work">
                            <div className="listed-head">
                                <img src={logo} alt="" />
                            </div>
                            <img src={workimg} className='workimg' alt="" />
                            <div className="listing-foot">
                                <div className="foot-titles">
                                    <h1>Gardener</h1>
                                    <p>₱12.00 - ₱30.00</p>
                                </div>
                                <div className="listing-btns">
                                    <button id='hire'>Hire</button>
                                    <button id='take'>Take</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="listed-work">
                            <div className="listed-head">
                                <img src={logo} alt="" />
                            </div>
                            <img src={workimg} className='workimg' alt="" />
                            <div className="listing-foot">
                                <div className="foot-titles">
                                    <h1>Gardener</h1>
                                    <p>₱12.00 - ₱30.00</p>
                                </div>
                                <div className="listing-btns">
                                    <button id='hire'>Hire</button>
                                    <button id='take'>Take</button>
                                </div>
                            </div>
                        </div>
                    </li>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Popular