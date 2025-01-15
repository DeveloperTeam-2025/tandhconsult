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
import Login from './Pages/Login/index'
import { Helmet } from 'react-helmet';
import { useCallback, useEffect, useState } from 'react'
import Modal from './Components/Modal/index'
import Cart from './Components/Cart/index'
function App() {
  const [quote, setquote] = useState(false)
  const [cart, setcart] = useState(false)
  const path = window.location.pathname.replace('/', '')
  const category = path?.split('').map((data)=>  data === '/' ? ' ' : data).join('')
  const Capitalize = category?.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
    const Modalopen = useCallback(() => {
        const body = document.querySelector('body')
        if(body){
            body.style.overflow = 'hidden'
        } 
        console.log(quote)
    },[])
    const Modalclose = useCallback(() => {
        const body = document.querySelector('body')
        if(body){
            body.style.overflow = 'scroll'
        } 
        console.log(quote)
    },[])

  return (
    <>   
    <Helmet>
      <title>{Capitalize[0] === '' ? 'Home' : Capitalize[Capitalize.length - 1 ]}</title>
    </Helmet>
    <div className='warning'>
      <span>BEWARE IMPERSONATION SCAMS! Ensure you're communicating with official T&amp;H Consulting via @tandhconsult.com emails. 
      <a href="//tandhconsult.com/about-us/scam-awareness/”" style={{color: "red"}}>Learn more &gt;&gt;&gt;</a></span>
    </div>
    <Header pathname={path} click={()=> { Modalopen(), setquote(true)}} cart={()=>{Modalopen(), setcart(true)}}/>
    { path &&
      <div className="wow animate__animated animate__fadeInUp bread mt-40">
        <div className="separator_container">
          <div className='flex items-center '>
            <div className='bread__link'>Home</div>
            {
              Capitalize.map((data )=> {
                return (
                <>
                  <div className='breadcrumbs__separator'/>
                  <div className='bread__link'>{data}</div>
                </>
              )
              })
            }
          </div>
        </div>
      </div>   
    }
    {
      quote && <Modal func={Modalclose} func2={() => setquote(false)}/>
    }
    {
      cart && <Cart func={Modalclose} func2={() => setcart(false)}/>
    }
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/fraud-awareness" element={<Fraud />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/our-certificates" element={<Certificate />} />
          <Route path="/our-team" element={<Team />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/partners" element={<Partner />} />
          <Route path="/product-category/investigations-and-disputes" element={<Investigation />} />
          <Route path="/product-category/consulting-and-documental-support" element={<Documental />} />
          <Route path="/product-category/cryptocurrency-investigation-and-compliance" element={<Cryptocurrency />} />
          <Route path="/product-category/business-services" element={<Business />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/category/blog" element={<Blog />} />
          <Route path="/my-account" element={<Login />} />
        </Routes>
      </Router>
    <Footer/>
    </>
  )
}

export default App
