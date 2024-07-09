import { useState } from 'react'
import './App.css'
import { Navbar } from './layouts/NavbarAndFooter/Navbar'
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
    </div>
  )
}

export default App
