import Navbar from './component/NavigationBar'
import React from 'react'
import Footer from './component/Footer'
import Home from './component/Home'
import  {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import NeedHelp from './component/NeedHelp'
import Carousel from './component/Carousel'

const App = () => {
  return (

    <Router>
      <div>
        <Navbar />
        
        <Route path="/needhelp"  component={NeedHelp}/ >
        <Home />
        <Carousel />
        <Footer />
      
      </div>

    </Router>
  )
}

export default App
