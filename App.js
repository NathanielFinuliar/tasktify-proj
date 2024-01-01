import React, {useEffect,useState} from "react";
// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// js file
import Landing from "./components/pages/landing";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Help from "./components/help";

function App() {
  return (
    <Router>
      <Nav/>
      <Help/>
      <div className="App">
          <Routes>
            <Route path="/" element={<><Landing/></>}/>
          </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
