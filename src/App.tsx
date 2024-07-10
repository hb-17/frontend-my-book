import { useState } from 'react'
import './App.css'
import { Navbar } from './layouts/NavbarAndFooter/Navbar'
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks'
import { Carousel } from './layouts/HomePage/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
    </div>
  )
}

export default App
