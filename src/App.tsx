import { useState } from 'react'
import './App.css'
import { Navbar } from './layouts/NavbarAndFooter/Navbar'
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks'
import { Carousel } from './layouts/HomePage/Carousel'
import { Heros } from './layouts/HomePage/Heros'
import { LibraryService } from './layouts/HomePage/LibraryService'
import { Footer } from './layouts/NavbarAndFooter/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryService />
      <Footer />
    </div>
  )
}

export default App
