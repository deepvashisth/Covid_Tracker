import Navbar from './component/NavigationBar'
import React from 'react'
import Contact from './component/Contact'
import  {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import HomeComp from './component/HomeComp'
import NeedHelp from './component/NeedHelp'




const App = () => {


  return (

    <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomeComp} />
              <Route path="/needhelp"  component={NeedHelp} />
              <Route path="/contactus"  component={Contact} />
          </Switch>


    </Router>
  )
}

export default App
