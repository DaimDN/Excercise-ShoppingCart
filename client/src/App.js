import React, { Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing'
import Cart from './cart/cart'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Thanks from './pages/Thanks'
import Orders from './pages/Order'
export default function App() {
    return (
          <Router>
            <Fragment>
            <Navbar/>            
              <Switch>
              <Route path="/cart" component={Cart} />  
              <Route path="/products" component={Landing} />  
              <Route path="/thanks" component={Thanks} /> 
              <Route path="/orders" component={Orders} /> 
                <Route exact path="/" component={Home} /> 
                <Route path="*" component={Error} />          
              </Switch>
            </Fragment>
          </Router>
      );
    };


    function Error(){
      return (
        <div className="w3-animate-zoom">
            <div style={{backgroundImage: 'url(images/1.jpg)', height: '500px', backgroundSize: 'cover'}} id="carouselExampleControls" className="carousel slide" data-ride="carousel">


            

                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7">
                          <br/>
                            <h1 className="display-2"> Page Not Found </h1>
                            <br/>
                            <h3>The Imaginative application of Art & Science </h3>
                            
                            <a className="btn btn-info btn-lg" href="/products">Buy products</a>
                        </div>
                        <div className="col-xl-5 col-lg-5"></div>
                    </div>
                    

                </div>

        </div>
            </div>
     
        
    )
    }
