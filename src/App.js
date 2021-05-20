import Navbar from './component/NavigationBar'
import React from 'react'
import Footer from './component/Footer'
import Home from './component/Home'

import NeedHelp from './component/NeedHelp'
import Carousel from './component/Carousel'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Carousel />
      <Footer />
      <NeedHelp />
    </div>
  )
}

export default App
