import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './home.css';
import Project from './project';
import Tech from './tech';

const Home = () => {
  const [showTech, setShowTech] = useState(false);
  const [showProject, setShowProject] = useState(false);

  const handleBrowseProjects = () => {
    setShowProject(true);
    scroll.scrollToBottom(); // Smooth scroll to the bottom when showing projects
  };

  const handleBrowseTech = () => {
    setShowTech(true);
    scroll.scrollToBottom(); // Smooth scroll to the bottom when showing technologies
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
      <Link to="contact" smooth={true} duration={500} className="browse-projects contacta">
        Contact me
      </Link>
      <hr className='projhr' />
    </div>
  );
};

export default Home;
