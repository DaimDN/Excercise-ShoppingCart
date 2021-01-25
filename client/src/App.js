import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing'
import Cart from './cart/cart'
import Navbar from './components/Navbar'
export default function App() {
    return (
       
          <Router>
            <Fragment>
            <Navbar/>
            
              <Switch>
              <Route path="/cart" component={Cart} />  
                <Route exact path="/" component={Landing} />          
              </Switch>
            </Fragment>
          </Router>
   
      );
    };

