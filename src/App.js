import React, {useEffect,useState} from "react";
// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// js file
import Landing from "./components/pages/landing";
import Nav from "./components/nav";

function App() {
  return (
    <Router>
      <Nav/>
      <div className="App">
          <Routes>
            <Route path="/" element={<><Landing/></>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
