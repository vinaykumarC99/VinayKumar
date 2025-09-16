import { useState } from 'react'
import { Link }  from 'react-router-dom'
import { BrowserRouter , Routes , Route , } from 'react-router-dom'
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import './App.css'
import Nav from "./components/Nav.jsx";
import Head , { Footer } from "./components/base.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <Head />
        <Nav />

              <nav>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
              </nav>
              <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
              <Footer />
          </BrowserRouter>
      </div>
      
    </>
  )
}

export default App