import React from "react";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Gallery from "./components/pages/Galery/Gallery";
import AboutMe from "./components/pages/AboutMe";
import ImgPage from "./components/pages/ImgPage";

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Gallery />} />
          <Route path='/aboutMe' element={<AboutMe />} />
          <Route path='/image/:id' element={<ImgPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
