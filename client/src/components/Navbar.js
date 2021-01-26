import React, {useState, useEffect} from 'react'
import api from '../util/api'

export default function Navbar() {
    const[cart, setCart] = useState(false);

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
                <img onMouseLeave={() => setCart(false)} onMouseEnter={()=>{setCart(true)}} style={{width: '33px'}} src="images/logo.svg"/>


                    {cart ?(<div onMouseLeave={() => setCart(false)} onMouseEnter={()=>{setCart(true)}}  >
                        <div class="card mb-4 box-shadow w3-animate-zoom" style={{position: 'absolute', zIndex: '300', right: '2vw', marginTop: '20px'}}>
                    <div class="card-header">
                       <p className="text-center">YOUR CART</p>
                    </div>
                    <div class="card-body">
                        
                        <ul class="list-unstyled mt-3 mb-4">
                        <h1>Under Construction</h1>
                        </ul>
                        <button type="button" class="btn btn-lg btn-block btn-primary">Checkout</button>
                    </div>
                    </div>


                     
                     
                     </div>): (<div> </div>)}


                


                </div>
            
        </div>
    )
}
