import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './style.css'

function App() {
  return (
    <Router>
      <div className="d-flex flex-column h-100">
        <Navbar />
        <Route exact path="/portfolio" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Homepage} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

