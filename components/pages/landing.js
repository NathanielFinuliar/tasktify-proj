import React, {useEffect,useState} from "react";
// css
import '../styles/landing.css'
// asset 
import tasktifylogo from '../assets/tasktifylogo.png'
import compiled from '../assets/compiled-img.png'
// js
import Popular from "./popularwork";
import Tasktify from "./tasktify";
import CreateAcc from "./create-acc";
import Taskweek from "./taskerweek"
import Testimonials from "./testimonials";

const Landing = () => {

// usestate
const [ closeModal, setClosemodal ] = useState(true);
const [ imagesUp, setImagesup ] = useState("");
const [scrollani1, setScrollani1] = useState(false);

// auto close modal and lower image sets
const autoModal = () => {
    setClosemodal(false)
}

// useeffect
useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };

}, []);
// Event listener to track scroll position
const handleScroll = () => {
    if (window.scrollY <= 100) {
        setClosemodal(false)
    } else {
    }
    if (window.scrollY >= 200) {
        setImagesup("upimage")
    } else {
        setImagesup("")
    }
};
const startNow = () => {
    setImagesup("upimage")
    const targetElement = document.getElementById('contents');

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth', // You can use 'auto' for instant scrolling
      });
    }
}
  return (
    <div className="main-landing">
        <div className="landing-page">
            <div className={`auto-modal-create ${closeModal}`}>
                <CreateAcc/>
                <div className="auto-close-back" onClick={autoModal}></div>
            </div>
            <div className="landing-page-contents">
                <section>
                    <div className="get-start">
                        <div className="tasktifylogo">
                            <img src={tasktifylogo} alt="" />
                        </div>
                        <h1>Tasktify</h1>
                        <div className="motto">
                            <p>task done, pay fast</p>
                        </div>
                        <div className="getstart">
                            <button onClick={startNow}>Get Started</button>
                        </div>
                    </div>
                </section>
                <div className={`onscroll-imgs ${closeModal} ${imagesUp}`}>
                    <img src={compiled} alt="" />
                </div>
            </div>
            <div className="landing-contents" id="contents">
                <Popular/>
                <Tasktify/>
                <Taskweek/>
                <Testimonials/>
            </div>
        </div>
    </div>
  )
}

export default Landing