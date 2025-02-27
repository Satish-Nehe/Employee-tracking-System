import React from "react";
import { Link, useNavigate } from "react-router";
import "./Home.css";
import logo from "../assets/image.png";
import Cards from "./Cards";
import ProjectCards from "./ProjectCards";
function Home() {
 

  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(`/offices-data/${selectedValue}`);
    }
  };
  
  const handleChageProjects = (event) => {
    const selected = event.target.value;
    if (selected) {
      navigate(`/projects-data/${selected}`);
    }
  };
  return (
    <div>
      <header className="Header">
        <div className="Logo">
          <img src={logo} alt="Logo" style={{ height: "10vh" }} />
          <span>ActiceTrak</span>
        </div>
        <div className="Home">
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          <select name="Location" id="Location" onChange={handleChange}>
            <option style={{ textAlign: "center" }}>Location</option>
            <option value="London">London</option>
            <option value="New York">New York</option>
            <option value="Singapore">Singapore</option>
            <option value="Sydney">Sydney</option>
          </select>
        </div>

        <div>
          <select name="Projects" id="projects" onChange={handleChageProjects}>
            <option style={{ textAlign: "center" }} >Projects</option>
            <option value="Employee Attendance Tracker">Employee Attendance Tracker</option>
            <option value="Project Management Dashboard">Project Management Dashboard</option>
            <option value="AI Chatbot for Employee Queries">AI Chatbot for Employee Queries</option>
            <option value="Remote Work Monitoring System">Remote Work Monitoring System</option>
            <option value="Employee Performance Review System">Employee Performance Review System</option>
          </select>
        </div>

        <div className="button">
          <button>Contact Us</button>
        </div>
      </header>

      <Cards />
      <ProjectCards />
    </div>
  );
}

export default Home;
