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
import Investigation from './Pages/Investigation/index'
import Documental from './Pages/Documental/index'
import Cryptocurrency from './Pages/Cryptocurrency/index'
import Business from './Pages/Business/index'
import Contact from './Pages/Contact/index'
import Blog from './Pages/Blog/index'

function App() {
  const path = window.location.pathname.replace('/', '')
  const category = path?.split('').map((data)=> data === '-' ? ' ' : data).join('')
  const Capitalize = category?.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  return (
    <>   
    <Header pathname={path}/>
    { path &&
      <div className="wow animate__animated animate__fadeInUp bread mt-40">
        <div className="separator_container">
          <div className='flex items-center '>
            <div className='bread__link'>Home</div>
            <div className='breadcrumbs__separator'></div>
            <div className='bread__link'>{Capitalize}</div>
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
          <Route path="/scam-awareness" element={<Fraud />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/our-certificates" element={<Certificate />} />
          <Route path="/our-team" element={<Team />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/partners" element={<Partner />} />
          <Route path="/product-category/investigations-and-disputes" element={<Investigation />} />
          <Route path="/product-category/consulting-documental-support" element={<Documental />} />
          <Route path="/product-category/cryptocurrency-investigation-and-compliance" element={<Cryptocurrency />} />
          <Route path="/product-category/business-services" element={<Business />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/category/blog" element={<Blog />} />
          
        </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
