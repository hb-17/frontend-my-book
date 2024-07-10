import { useState } from 'react'
import './App.css'
import { Navbar } from './layouts/NavbarAndFooter/Navbar'
import { Footer } from './layouts/NavbarAndFooter/Footer'
import { HomePage } from './layouts/HomePage/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
