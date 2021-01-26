import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing'
import Cart from './cart/cart'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {StateProvider} from './StatePusher'
import reducer, {initialState} from './Reducer'
export default function App() {
    return (
      <StateProvider initialState={initialState} reducer={reducer}>
          <Router>
            <Fragment>
            <Navbar/>            
              <Switch>
              <Route path="/cart" component={Cart} />  
              <Route path="/products" component={Landing} />  
                <Route exact path="/" component={Home} />          
              </Switch>
            </Fragment>
          </Router>
      </StateProvider>
      );
    };

