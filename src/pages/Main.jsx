import './Main.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const Main = () => {
  return (
    <>
    <Navbar />
    <div className="main-container">
      <div className="maintext">
<p>Turning ideas into real</p>
<p>life <span>products </span>is my</p>
<p>calling.</p>

      </div>
      
 <Link to="/Portfolio/projects">
        <div className="viewProjectsBtn">
          View Projects
        </div>
      </Link>
    </div>
    </>
  )
}

export default Main