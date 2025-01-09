import Home from './Pages/Home/index'
import './App.css'
import Footer from './Components/Footer/index'
import Header from './Components/Header/index'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import About from './Pages/AboutUs/index'
import Terms from './Pages/Terms/index'
import Privacy from './Pages/Privacy/index'
import Fraud from './Pages/Fraud/index'
import Faq from './Pages/Faq'
import Certificate from './Pages/Certificate/index'
import Team from './Pages/Team/index'
import Solutions from './Pages/Solutions/index'
import Partner from './Pages/Partner/index'
function App() {
  const path = window.location.pathname.replace('/', '')
  const capitalizeFirst = (str:any) => str.charAt(0).toUpperCase() + str.slice(1);
  const word = path.replace('-', ' ')
  const result = capitalizeFirst(word) 
  console.log(result, 'word')
  return (
    <>   
    <Header pathname={path}/>
    { path &&
      <div className="wow animate__animated animate__fadeInUp bread mt-40">
        <div className="separator_container">
          <div className='flex items-center '>
            <div className='bread__link'>Home</div>
            <div className='breadcrumbs__separator'></div>
            <div className='bread__link'>{result}</div>
          </div>
        </div>
      </div>   
    }
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/about-us/scam-awareness" element={<Fraud />} />
          <Route path="/cryptocurrency-investigations-faq" element={<Faq />} />
          <Route path="/our-certificates" element={<Certificate />} />
          <Route path="/our-team" element={<Team />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
