import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
//import Navbar from './components/Navbar'
import About from './components/About'
import Homepage from './components/Homepage'

const App = () => {
  return ( 

    <BrowserRouter>
       
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/about' component={About} />
        </Switch>
    </BrowserRouter>


   );
}
 
export default App;

