import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/portfolio" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Homepage} />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

