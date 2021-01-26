import React, {useEffect, useState} from 'react'
import { useStateValue } from "../StatePusher"
import api from '../util/api'

export default function Cart() {

    const [basket, setBasket] = useState([]);

    useEffect(()=>{
        (async function Runner(){
            var result = await api.get('/api/cart');
            var datset = result.data
            setBasket(datset);



        })()
    })

 
    return (
        <div className="container">
        <h1>Your Items</h1>
        <hr/>

        
            
        </div>
    )
}
