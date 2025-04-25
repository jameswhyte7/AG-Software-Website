
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home' // Adjust path as per your structure
import Products from './pages/Products'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/products" element={<Products />} />
        
      </Routes>
    </Router>
  )
}

export default App
