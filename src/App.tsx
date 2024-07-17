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
    <div>
      <Navbar />
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

      <Footer />
    </div>
  )
}

export default App
