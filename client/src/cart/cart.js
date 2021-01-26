import React, {useEffect, useState} from 'react'
import { useStateValue } from "../StatePusher"
import api from '../util/api'
import { useHistory } from "react-router-dom";
import FlipMove from "react-flip-move";


export default function Cart() {

    var sum =0;

    const [basket, setBasket] = useState([]);

    const [total, setTotal] =useState(0);

    useEffect(()=>{
      

        var storage= JSON.parse(localStorage.getItem('myData'));
        setBasket(storage)

    })

    if( basket == null || basket.length === 0){

        return(
            <div className="container">
                <h1 className="display-3">Basket is Empty</h1>
                <a href="/products" className="btn btn-primary btn-lg ">Order Now</a>
            </div>
        )
        
    }
    else{
        for(var a =0; a < basket.length; a ++){
            var x = basket[a].item.price;
            sum = sum + x;
          
        }

        return (
            <div className="container">

            <div className="row">
                <div className="col-3">
                <h1>Your Cart</h1>
                </div>
                <div className="col-6"></div>
                <div className="col-3">
                <div className="ml-auto text-right">
                <br/>
                <button onClick={()=>{
                    localStorage.removeItem('myData');
                }} className="btn btn-info">Empty Cart</button>
            </div>
                </div>
            </div>


          
            
            <hr/>
            <div className="container" style={{width: '60%'}}>
            <FlipMove duration={1200} easing="ease-out">
            {basket.map((ite)=>{
                                  return <div >
                                  <div className="row"> 
                                  <div className="col-3"> 
    
                                  <img style={{width: '34%'}} src={ite.item.url} alt="" />
                                    
                                  </div>
    
                                  <div className="col-6"> 
                                  <h5> Name  : {ite.item.name}</h5>
                                  <h5> Price :  {ite.item.price} £</h5>
                                  <h5>Size : {ite.item.size}</h5>
    
                                  </div>
                                  <div className="col-3"> 
                                    <br/>
                                   <button onClick={()=>{
                                     
                                    var array = basket.filter(function(itemx){
                                        return itemx !== ite;
                                    })

                                   localStorage.setItem('myData', JSON.stringify(array));                                  
                                   }} className="btn btn-danger btn-sm">Remove</button>
                                    
                                    </div>
                                  </div>
                                 
    
                                  <hr/>
                                  
                                  </div>
                              })}
                              </FlipMove>

                              <div className="row">
                                  <div className="col-6">
                                  <h2>Total : {Math.round(sum)} £</h2>
                                  </div>
                                  <div className="col-6 text-right">
                                  <button onClick={()=>{
                                      alert("Thanks for your Order");
                                      localStorage.removeItem('myData');

                                  }} className="btn btn-primary btn-lg ">Purchase</button>
                                  </div>
                              </div>

                              
                                                         
                              </div>
    
            
                
            </div>
        )

    }

 
  
}
