import React, {useState, useEffect} from 'react'
import api from '../util/api'
import { useStateValue } from "../StatePusher"

export default function Navbar() {
    const[cart, setCart] = useState(false);
    const [{ basket }, dispatch] = useStateValue();

    const [shopitems, setshopitems] = useState();
    useEffect(() => {
        
            (async function fetch(){
                let dataset = await api.get('/api/products');
                setshopitems(dataset.data)
            })()
      });

     
      
      
    return (
        <div >
              <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                <h5 class="my-0 mr-md-auto font-weight-normal"><a href="/" className="text-dark" >Shopping App</a></h5>
                <nav class="my-2 my-md-0 mr-md-3">
                    <a class="p-2 text-dark" href="/products">Products</a>
                    <a class="p-2 text-dark" href="/news">News</a>
                    <a class="p-2 text-dark" href="https://daimdev.herokuapp.com">Contact</a>
                    
                </nav>
                <p className="">{basket?.length}</p> &nbsp;
                 <img onMouseLeave={() => setCart(false)} onMouseEnter={()=>{setCart(true)}} style={{width: '33px'}} src="images/logo.svg"/>


                    {cart ?(<div onMouseLeave={() => setCart(false)} onMouseEnter={()=>{setCart(true)}}  >
                        <div class="card mb-4 box-shadow w3-animate-zoom" style={{position: 'absolute', zIndex: '300', right: '2vw', marginTop: '20px', width: '27%'}}>
                    <div class="card-header">
                       <p className="text-center">YOUR CART</p>
                    </div>
                    <div class="card-body" style={{overflowY: 'scroll', height: '400px'}} >
                        
                        
                        
                          
                          {basket.map((ite)=>{
                              return <div >
                              <div className="row"> 
                              <div className="col-3"> 

                              <img style={{width: '90%'}} src={ite.item.url} alt="" />
                                
                              </div>

                              <div className="col-6"> 
                              <h5>  {ite.item.name}</h5>
                              <h5> {ite.item.price} £</h5>

                              </div>
                              <div className="col-3"> 
                                <br/>
                                <img style={{width: '46%'}} src="images/remove.svg" alt="" />
                                
                                </div>
                              </div>
                             

                              <hr/>
                              
                              </div>
                          })}
                          
                        
                      
                      
                    </div>
                    <div className=" text-center">
                    <a href="/cart"onClick={()=>{api.post('/add', basket)}}  type="button" class="btn btn-lg btn-block btn-primary">Checkout</a>
                    </div>
                    </div>


                     
                     
                     </div>): (<div> </div>)}


                


                </div>
            
        </div>
    )
}
