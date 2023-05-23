import React from "react";
import "./Publications.css";
import { Link } from "react-router-dom";
// import Navbar from './Navbar';
// import Footer from './components/pages/Footer';
import Areas from "../Research/Research";
import Project from "../Projects/Projects";
export default function Publications() {
  return (
  <>
      {/* <Navbar /> */}
      <div className="main-box">
        <div className="side-box">
          <p>Research Areas</p>
          <ul className="side-link">
            <li>
              <Link to="/Areas">Areas</Link>
            </li>
            <li>
              <Link  to="/Project">Project</Link>
            </li>
            <li>
              <Link to="/Publication">Publications</Link>
            </li>
          </ul>
        </div>
        <div>
          
        </div>
      </div>
      {/* <h1 className="consulting">Publications</h1> */}
      {/* <Footer /> */}
  </>
  );
}
