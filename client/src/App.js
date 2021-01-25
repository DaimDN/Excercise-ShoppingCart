import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing'

export default function App() {
    return (
       
          <Router>
            <Fragment>
            
              <Switch>
                <Route exact path="/" component={Landing} />
                
              </Switch>
            </Fragment>
          </Router>
   
      );
    };

