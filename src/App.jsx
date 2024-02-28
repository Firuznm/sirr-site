import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header/Header"
import Home from "./Pages/Home/Home"
import Footer from "./Components/Footer/Footer"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Product from "./Pages/Product/Product"
import Media from "./Pages/Media/Media"
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"
import PrDetailsPage from "./Pages/PrDetailsPage/PrDetailsPage"
import { GlobalProvider } from "./Contexts/GlobalContext"
import SearchResult from "./Pages/SearchResult/SearchResult"



function App() {

  return (
    <>
    <GlobalProvider>
     <Header/> 
     
     <ScrollToTop/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/about us" element={<About/>}/>  */}
      <Route path="/product" element={<Product/>}/>
      <Route path="/media" element={<Media/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/search" element={<SearchResult/>}/>

      <Route path="/product/:slug" element={<PrDetailsPage/>}/>
      
     </Routes>
     <Footer/>
     </GlobalProvider>
    </>
  )
}

export default App
