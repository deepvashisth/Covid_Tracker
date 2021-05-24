import Navbar from './component/NavigationBar'
import React from 'react'
import Contact from './component/Contact'
import  {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import HomeComp from './component/HomeComp'
import NeedHelp from './component/NeedHelp'
import Quiz from './component/Quiz'
import Stats from './component/Stats'




const App = () => {


  return (

    <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomeComp} />
              <Route path="/NeedHelp"  component={NeedHelp} />
              <Route path="/Contact"  component={Contact} />
              <Route path="/Quiz"  component={Quiz} />
              <Route path="/Statistics"  component={Stats} />
              
          </Switch>


    </Router>
  )
}

export default App
