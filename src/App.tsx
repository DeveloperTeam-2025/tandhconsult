import Home from './Pages/Home/index'
import './App.css'
import Footer from './Components/Footer/index'
import Header from './Components/Header/index'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
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
import { useCallback, useState } from 'react'
import Modal from './Components/Modal/index'
import Cart from './Components/Cart/index'
import Lost from './Pages/Lost_Password/index'
import Reset from './Pages/Reset_Link/index'
import Digital from './Components/Reusable/Content/index'
import DigitalProduct from './Pages/Digital/index'
import Category from './Components/Reusable/Category/index'
function App() {
  const [quote, setquote] = useState(false)
  const [cart, setcart] = useState(false)
  const path = window.location.pathname
  const category = path?.split('/').filter((data)=>  data !== '' )
  const Capitalize = category.join('') === '' ? [] : category?.map(word => word.charAt(0).toUpperCase() + word.slice(1))
  let Edit: any
  let Add: any = []
  Edit = Capitalize.map(data => data.split('').map(data => data === '-' ? ' ': data ).join(''))
  Add = [...Edit]
  
    const Modalopen = useCallback(() => {
        const body = document.querySelector('body')
        if(body){
            body.style.overflow = 'hidden'
        } 
    },[])
    const Modalclose = useCallback(() => {
        const body = document.querySelector('body')
        if(body){
            body.style.overflowY = 'scroll'
        } 
    },[])

  return (
    <>   
    <Helmet>
      <title>{Capitalize[0] === '' ? 'Home' : Add[Add.length - 1 ]}</title>
    </Helmet>
    <div className='warning'>
      <span>BEWARE IMPERSONATION SCAMS! Ensure you're communicating with official T&amp;H Consulting via @tandhconsult.com emails. 
      <a href="//tandhconsult.com/about-us/scam-awareness/”" style={{color: "red"}}>Learn more &gt;&gt;&gt;</a></span>
    </div>
    <div className='main_homepage'>
      <Header pathname={path.replace('/', '')} click={()=> { Modalopen(), setquote(true)}} cart={()=>{Modalopen(), setcart(true)}}/>
      { Add.length !== 0  &&
      <div className="pt-[10rem]">
        <div className="wow animate__animated animate__fadeInUp bread ">
          <div className="separator_container">
            <div className='flex items-center '>
              <div className='bread__link'>Home</div>
              {
                Add.map((data: any,id: number )=> {
                  return (
                  <div key={id} className='flex items-center'>
                    <div className='breadcrumbs__separator' />
                    <div className='bread__link'>{data}</div>
                  </ div>
                )
                })
              }
            </div>
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
            <Route path="/fraud-awareness" element={<Fraud />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/our-certificates" element={<Certificate />} />
            <Route path="/our-team" element={<Team />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/partners" element={<Partner />} />
            <Route path="/solutions/investigations-and-disputes" element={<Investigation />} />
            <Route path="/solutions/investigations-and-disputes/:id" element={<Digital />} />
            <Route path="/solutions/consulting-and-documental-support" element={<Documental />} />
            <Route path="/solutions/consulting-and-documental-support/:id" element={<Digital />} />
            <Route path="/solutions/cryptocurrency-investigation-and-compliance" element={<Cryptocurrency />} />
            <Route path="/solutions/cryptocurrency-investigation-and-compliance/:id" element={<Digital />} />
            <Route path="/solutions/digital-products" element={<DigitalProduct />} />
            <Route path="/solutions/business-services" element={<Business />} />
            <Route path="/solutions/business-services/:id" element={<Digital />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/category/blog" element={<Blog />} />
            <Route path="/category/blog/:id" element={<Category />} />
            <Route path="/my-account" element={<Login />} />
            <Route path="/my-account/lost-password" element={<Lost />} />
            <Route path="/my-account/lost-password/reset_link_true" element={<Reset />} />
            <Route path="/solutions/digital-products/:id" element={<Digital />} />
          </Routes>
        </Router>
      <Footer/>
    </div>
      {
        quote && <Modal func={Modalclose} func2={() => setquote(false)}/>
      }
      {
        cart && <Cart func={Modalclose} func2={() => setcart(false)}/>
      }
    </>
  )
}

export default App
