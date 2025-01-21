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
// import ReactDOMServer from "react-dom/server";

  // const content =   [
  //   {"name":"10 Signs to Spot a Love Scam Checklist", "id":"10-signs-to-spot-a-love-scam-checklist"},
  //   {"name":"How Not to Get Scammed: A Guide to Protecting Yourself Online", "id":"how-not-to-get-scammed-a-guide-to-protecting-yourself-online"},
  //   {"name":"Printable Workbook with Exercises – Fraud Awareness", "id":"fraud-awareness-printable-workbook-with-exercises"},
  //   {"name":"Fraud Awareness Masterclass + Presentation", "id":"Fraud"},
  //   {"name":"Crypto Transaction Risk Audit", "id":"crypto-transaction-risk-audit"},
  //   {"name":"Asset Search and Tracing", "id":"asset-search-and-tracing"},
  //   {"name":"Expert Witness for Cryptocurrency", "id":"expert-witness-for-cryptocurrency"},
  //   {"name":"Expert Witness for Cryptocurrency", "id":"cryptocurrency-intelligence-report-for-business"},
  //   {"name":"Cryptocurrency Investigation", "id":"cryptocurrency-investigation"},
  //   {"name":"Cryptocurrency Intelligence Report", "id":"cryptocurrency-intelligence-report"},
  //   {"name":"Cryptocurrency Information Gathering Support", "id":"cryptocurrency-information-gathering-support"},
  //   {"name":"Due Diligence Services", "id":"due-diligence-services"},
  //   {"name":"Dispute Settlement “Premium Package”", "id":"dispute-settlement-premium-package"},
  //   {"name":"Dispute Settlement “Optimal Package”", "id":"dispute-settlement-optimal-package"},
  //   {"name":"Dispute Settlement “Special Package”", "id":"dispute-settlement-special-package"},
  //   {"name":"Dispute Settlement “Basic Package”", "id":"dispute-settlement-basic-package"},
  //   {"name":"Dispute Settlement “Basic Package”", "id":"chargeback-consultation"},
  //   {"name":"Technical translation (non-certified)", "id":"technical-translation-non-certified"},
  //   {"name":"Case Assessment & Compilation Services", "id":"compilation-case-assessment"},
  //   {"name":"Application Processing / Drafting", "id":"application-processing-drafting"},
  //   {"name":"Evaluation and Initial Consultation", "id":"evaluation-and-initial-consultation-fraud"},
  //   {"name":"Employee Background Check Services", "id":"employee-background-check"},
  //   {"name":"Corporate Background Check", "id":"corporate-background-check"},
  //   {"name":"Corporate Fraud Investigation", "id":"corporate-fraud-investigation"},
  //   {"name": "Company Valuation", "id":"company-valuation"},
  //   {"name": "Chargeback Process for Merchants", "id":"chargeback-process-merchants"}
  // ]
  // const category = [
  //   {"id": "why-you-shouldnt-face-banks-alone-the-importance-of-professional-help-in-scam-cases", "name": "Why You Shouldn’t Face Banks Alone: The Importance of Professional Help in Scams"},
  //   {"id": "common-ticket-scams", "name": "Common Ticket Scams – What You Need to Know and How to Protect Yourself"},
  //   {"id": "business-identity-theft", "name": "Business Identity Theft – How to Identify and Respond to it"},
  //   {"id": "how-to-report-a-scam-in-portugal", "name": "Report a Scam in Portugal"},
  //   {"id": "how-to-report-a-scam-in-norway", "name": "How to report a scam in Norway?"},
  //   {"id": "how-to-report-a-scam-in-spain", "name": "How to report a Scam in Spain?"},
  //   {"id": "estafas-de-empleo-falso", "name": "Cuidado con las Estafas de Completar Tareas y Empleo Falso: Protégete del Fraude en Línea"}, 
  //   {"id": "fake-employment-scams", "name": "Cuidado con las Estafas de Completar Tareas y Empleo Falso: Protégete del Fraude en Línea"},
  //   {"id": "facebook-marketplace-scams", "name": "Surviving Scams on Facebook Marketplace"},
  //   {"id": "report-scam-in-new-zealand", "name": "How to Report a Scam in New Zealand"},
  //   {"id": "report-scam-in-qatar", "name": "How to Report a Scam in Qatar?"},
  //   {"id": "report-scam-in-france", "name": "How to Report a Scam in France"},
  //   {"id": "report-scam-in-canada", "name": "How to Report a Scam in Canada"},
  //   {"id": "cryptocurrency-fraud","name": "Unmasking Cryptocurrency Fraud: Recent Case Breakdowns by T&amp;H Consulting" },
  //   {"id": "background-checks-checklist", "name": "A-Z of Business Security – Your Background Checks Checklist"},
  //   {"id": "report-fraud-in-south-africa", "name": "How to Report Fraud in South Africa"},
  //   {"id": "cryptocurrency-investigations", "name": "What is a Cryptocurrency Investigation?"},
  //   {"id": "due-diligence-buying-a-small-business", "name": "Due Diligence When Buying a Small Business"},
  //   {"id": "due-diligence-when-buying-a-business", "name": "Mastering Due Diligence When Buying a Business"},
  //   {"id": "how-to-report-fraud-in-germany", "name": "Guide: How to Report Fraud in Germany"},
  //   {"id": "due-diligence-services-importance", "name": "The Indispensable Role of Due Diligence Services in Business"},
  //   {"id": "ai-blockchain-digital-surveillance", "name": "AI, Blockchain and Digital Surveillance: A Comprehensive Exploration"},                                       
  // ]
  // const category_loop =   { path:`/category/blog/` , name: ":id", component:<Category />},
// const routes = [
//   { path: "/", name: "Home", component: <Home /> },
//   { path: "/about-us", name: "About Us", component: <About /> },
//   { path: "/terms-and-conditions", name: "Terms and Conditions", component: <Terms /> },
//   { path: "/privacy-policy", name: "Privacy Policy", component: <Privacy /> },
//   { path: "/category/blog", name: "Blog", component: <Blog /> },
//   { path: "/contact-us", name: "Contact Us", component: <Contact /> },
//   { path:"/fraud-awareness" , name: "Fraud", component:<Fraud />},
//   { path:"/faq" , name: "Faq", component:<Faq />},
//   { path:"/our-certificates" , name: "Certificates", component:<Certificate />},
//   { path:"/our-team" , name: "Team", component:<Team />},
//   { path:"/solutions" , name: "Solutions", component:<Solutions />},
//   { path:"/partners" , name: "Partners", component:<Partner />},
//   { path:"/solutions/investigations-and-disputes" , name: "Investigations", component:<Investigation />},
//   { path:"/solutions/investigations-and-disputes/:id" , name: ":id", component:<Digital />},
//   { path:"/solutions/consulting-and-documental-support" , name: "Consulting", component:<Documental />},
//   { path:"/solutions/consulting-and-documental-support/:id" , name: ":id", component:<Digital />},
//   { path:"/solutions/cryptocurrency-investigation-and-compliance" , name: "Cryptocurrency", component:<Cryptocurrency />},
//   { path:"/solutions/cryptocurrency-investigation-and-compliance/:id" , name: ":id", component:<Digital />},
//   { path:"/solutions/digital-products" , name: "Digital", component:<DigitalProduct />},
//   { path:"/solutions/business-services" , name: "Business", component:<Business />},
//   { path:"/solutions/business-services/:id" , name: ":id", component:<Digital />},
//   { path:"/category/blog/:id" , name: ":id", component:<Category />},
//   { path:"/my-account" , name: "My Account", component:<Login />},
//   { path:"/my-account/lost-password" , name: "Lost Password", component:<Lost />},
//   { path:"/solutions/digital-products/:id" , name: ":id", component:<Digital />}
// ];


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
  //   const [searchTerm, setSearchTerm] = useState("");

  //   // Helper function to extract text content from a component
  //   const extractTextContent = (component: any) => {
  //     const htmlString = ReactDOMServer.renderToStaticMarkup(component);
  //     return htmlString.replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML tags
  //   };
  
  //   // Filter routes based on search term
  //   const filteredRoutes = routes.filter((route) => {
  //     const textContent = extractTextContent(route.component);
  //     return (
  //       route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       route.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       textContent.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   });
  // console.log(filteredRoutes)
  return (
    <>   
      <Helmet>
        <title>{Capitalize[0] === '' ? 'Home' : Add[Add.length - 1 ]}</title>
      </Helmet>
      <div className='warning'>
        <span>BEWARE IMPERSONATION SCAMS! Ensure you're communicating with official T&amp;H Consulting via @tandhconsult.com emails. 
        <a href="//tandhconsult.com/about-us/scam-awareness/”" style={{color: "red"}}>Learn more &gt;&gt;&gt;</a></span>
      </div>
      {/* <input
        type="text"
        placeholder="Search components or text..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> */}
        {/* <p>{filteredRoutes.length} result{filteredRoutes.length !== 1 ? "s" : ""} found</p> */}
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
