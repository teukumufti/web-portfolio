import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {
  const component = (Child) => {
    return (
      <div className="App">
        <Navbar />
        <Child />
        <Footer />
      </div>
    );
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={component(Home)}></Route>
      </Routes>
    </div>
  );
}


export default App;