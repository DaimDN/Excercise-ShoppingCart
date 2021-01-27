import React, {useState, useEffect} from 'react'
import api from '../util/api'
import { useStateValue } from "../StatePusher"
import FlipMove from "react-flip-move";


export default function Navbar() {
    const[cart, setCart] = useState(false);    
    const [basket, setBasket] = useState([]);

    useEffect(()=>{
      
        var storage= JSON.parse(localStorage.getItem('myData'));
        setBasket(storage)

    })

    return (
        <div >
              <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                <h3 class="my-0 mr-md-auto font-weight-normal"><a href="/" className="text-dark" >Shopping App</a></h3>
                <nav class="my-2 my-md-0 mr-md-3">
                    <a class="p-2 text-dark" href="/products">Products</a>
                    <a class="p-2 text-dark" href="/news">News</a>
                    <a class="p-2 text-dark" href="https://daimdev.herokuapp.com">Contact</a>
                    
                </nav>
                
                
                 <img onMouseLeave={() => setCart(false)} onMouseEnter={()=>{setCart(true)}} style={{width: '33px'}} src="images/logo.svg"/>

                 {basket == null || basket.length === 0 ? <div>
                    <button style={{borderRadius: '50px'}} className="btn btn-info btn-sm">0</button> &nbsp;
                 </div> : <div>
                    <button style={{borderRadius: '50px'}} className="btn btn-info btn-sm">{basket?.length}</button> &nbsp;
                 </div>}

                    {cart ?(<div onMouseLeave={() => setCart(false)} onMouseEnter={()=>{setCart(true)}}  >
                        <div class="card mb-4 box-shadow w3-animate-zoom" style={{position: 'absolute', zIndex: '300', right: '2vw', marginTop: '20px', width: '27%'}}>
                    <div class="card-header">
                       <p className="text-center">YOUR CART</p>
                    </div>
                    <div class="card-body" style={{overflowY: 'scroll', height: '400px'}} >
                        
                    {basket == null || basket.length === 0 ? <div className="text-center"  style={{height: '100px'}}
                    onMouseOver={()=>{
                      
                          localStorage.removeItem('myData');
                          window.location.reload();
                          
                    }}>

                    <h3>Empty Basket</h3>
                    
                    
                    
                     </div> : <div> 
                     
                     <div>
                     <FlipMove duration={250} easing="ease-out">
                            {basket.map((ite)=>{
                              return <div >
                             
                              <div className="row"> 
                              <div className="col-3"> 

                              <img style={{width: '90%'}} src={ite.item.url} alt="" />
                                
                              </div>

                              <div className="col-6"> 
                              <h6>  {ite.item.name}</h6>
                              <h6 style={{fontSize: '15px'}}> {ite.item.price} £</h6>
                              <h6 style={{fontSize: '12px'}}> {ite.item.size} </h6>
                             

                              </div>
                              <div className="col-3"> 
                                <br/>
                                <button style={{borderRadius: '50px'}} onClick={()=>{
                                      var array = basket.filter(function(itemx){
                                        return itemx !== ite;
                                    })

                                   localStorage.setItem('myData', JSON.stringify(array));   
                                }}  className="btn btn-danger btn-sm">x</button>
                             
                                
                                </div>
                              </div>
                             

                              <hr/>

                              
                              </div>
                          })}
                          </FlipMove>
                            
                             </div>
                     
                     
                     </div>}
                      
                          
                          
                        
                      
                      
                    </div>

                    {basket == null || basket.length === 0 ? <div>
                        <div className=" text-center">
                    <a href="#"  type="button" class="btn btn-lg btn-block btn-primary disabled">Checkout</a>
                    </div>
                     </div> : <div>
                     <div className=" text-center">
                    <a href="/cart"  type="button" class="btn btn-lg btn-block btn-primary">Checkout</a>
                    </div>
                     
                     
                      </div> }



                  
                    </div>


                     
                     
                     </div>): (<div> </div>)}


                


                </div>
            
        </div>
    )
}
