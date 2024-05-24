import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <p>Hello, I&apos;m</p>
      <p className='home-name'>Nidhish Rathore</p>
      <span>Web Developer</span>
      <Link to="/Portfolio/main">
        <div className="getStartedbtn">
          get started
          <lord-icon
            src="https://cdn.lordicon.com/vduvxizq.json"
            trigger="hover"
           >
          </lord-icon>
        </div>
      </Link>
    </div>
  );
}

export default Home;
