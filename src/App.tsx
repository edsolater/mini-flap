import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import AppNavbar from 'views/TopNavbar'
import AsideMenu from 'views/AsideMenu'

export default function App() {
  return (
    <Router>
      <AppNavbar />
      <AsideMenu />
    </Router>
  )
}

render(<App />, document.getElementById('app'))
