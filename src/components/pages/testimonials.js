import React from 'react'
// css
import '../styles/testimonials.css'
// assets
import clientImg from '../assets/Dusk.jpg'
// icons
import { IoMdStar } from "react-icons/io";

const Testimonials = () => {
  return (
    <div className="testimonials">
        <div className="main-testimonials">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <p>Read Testimonials from</p>
                    <h1>Clients</h1>
                </div>
                <div className="testomonials-contents">
                    <section>
                        <li>
                            <div className="client-header">
                                <div className="client-img">
                                    <img src={clientImg} alt="" />
                                </div>
                                <div className="client-info">
                                    <p>Perpski Velron</p>
                                    <IoMdStar id='rate'/>
                                </div>
                            </div>
                            <div className="client-contents">
                                <p>"Hermann did a fantastic job installing a new AC unit in our house. His communication was excellent and he did really detailed work. I wil..."</p>
                                <span>Help Moving</span>
                            </div>
                        </li>
                        <li>
                            <div className="client-header">
                                <div className="client-img">
                                    <img src={clientImg} alt="" />
                                </div>
                                <div className="client-info">
                                    <p>Perpski Velron</p>
                                    <IoMdStar id='rate'/>
                                </div>
                            </div>
                            <div className="client-contents">
                                <p>"Hermann did a fantastic job installing a new AC unit in our house. His communication was excellent and he did really detailed work. I wil..."</p>
                                <span>Help Moving</span>
                            </div>
                        </li>
                        <li>
                            <div className="client-header">
                                <div className="client-img">
                                    <img src={clientImg} alt="" />
                                </div>
                                <div className="client-info">
                                    <p>Perpski Velron</p>
                                    <IoMdStar id='rate'/>
                                </div>
                            </div>
                            <div className="client-contents">
                                <p>"Hermann did a fantastic job installing a new AC unit in our house. His communication was excellent and he did really detailed work. I wil..."</p>
                                <span>Help Moving</span>
                            </div>
                        </li>
                    </section>
                    <section>
                        <li>
                            <div className="client-header">
                                <div className="client-img">
                                    <img src={clientImg} alt="" />
                                </div>
                                <div className="client-info">
                                    <p>Perpski Velron</p>
                                    <IoMdStar id='rate'/>
                                </div>
                            </div>
                            <div className="client-contents">
                                <p>"Hermann did a fantastic job installing a new AC unit in our house. His communication was excellent and he did really detailed work. I wil..."</p>
                                <span>Help Moving</span>
                            </div>
                        </li>
                        <li>
                            <div className="client-header">
                                <div className="client-img">
                                    <img src={clientImg} alt="" />
                                </div>
                                <div className="client-info">
                                    <p>Perpski Velron</p>
                                    <IoMdStar id='rate'/>
                                </div>
                            </div>
                            <div className="client-contents">
                                <p>"Hermann did a fantastic job installing a new AC unit in our house. His communication was excellent and he did really detailed work. I wil..."</p>
                                <span>Help Moving</span>
                            </div>
                        </li>
                        <li>
                            <div className="client-header">
                                <div className="client-img">
                                    <img src={clientImg} alt="" />
                                </div>
                                <div className="client-info">
                                    <p>Perpski Velron</p>
                                    <IoMdStar id='rate'/>
                                </div>
                            </div>
                            <div className="client-contents">
                                <p>"Hermann did a fantastic job installing a new AC unit in our house. His communication was excellent and he did really detailed work. I wil..."</p>
                                <span>Help Moving</span>
                            </div>
                        </li>
                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials