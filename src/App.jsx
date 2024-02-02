import Topbar from './components/Topbar'
import './App.css'
import Home from './components/home'
function App() {


  return (
    <>
     <header>
      <Topbar />
     </header>
     <div className="home" style={{ marginTop: '50px', marginBottom:'50px' }}>

     <Home  />
     </div>
     
    </>
  )
}

export default App
