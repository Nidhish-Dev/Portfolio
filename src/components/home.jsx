// home.jsx
import { useState } from 'react';
import './home.css';
import Project from './project';
import Tech from './tech'

const Home = () => {

  const [showTech, setShowTech] = useState(false);
  const [showProject, setShowProject] = useState(false);
const handleBrowseProjects = () => {
    setShowProject(true);
  };
  const handleBrowseTech = () => {
    setShowTech(true);
  };

  return (
    <div className='container'>
      <p className='heading'>Hello, I{'\''}m Nidhish Rathore</p>
      <p className='sub-heading'>Full-stack Web Developer</p>
      <p className='para'>Currently learning MERN Stack</p>
      <hr />
      {showProject ? (
        <Project />
      ) : (
        <button onClick={handleBrowseProjects} className="browse-projects">
          Show Projects
        </button>
      )}
      <hr className='projhr' />
      {showTech ? (
        <Tech />
      ) : (
        <button onClick={handleBrowseTech} className="browse-projects">
          Show Technologies
        </button>
      )}
      <hr className='projhr' />
      <a href="https://nidhish-dev.github.io/Contact_me/" className="browse-projects">Contact me</a>
     <hr className='projhr' />
    </div>
  );
}

export default Home;
