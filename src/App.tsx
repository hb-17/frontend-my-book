import { useState } from 'react'
import './App.css'
import { Navbar } from './layouts/NavbarAndFooter/Navbar'
import { Footer } from './layouts/NavbarAndFooter/Footer'
import { HomePage } from './layouts/HomePage/HomePage'
import { Route, Switch, Redirect } from 'react-router-dom';
import { SearchBookPage } from './layouts/SearchBookPage/SearchBookPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <div className='flex-grow-1'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>

          <Route path='/home'>
            <HomePage />
          </Route>

          <Route path='/search'>
            <SearchBookPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default App
