import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home"

import Navbar from "./components/Navbar"


function App() {
  const component = (Child) => {
    return (
      <div className="App">
        <Navbar />
        <Child />
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