// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./pages/HOME/Index"
import AboutPage from "./pages/ABOUT/about"
import Services from "./pages/SERVICES/Services"
import AccManagement from "./pages/ACCManagement/AccManagement"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/account-management" element={<AccManagement />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
