import React, {useState, useEffect, Fragment} from 'react'
import api from '../util/api'
import Fourofour from '../pages/Fourofour'
import Listextension from './Listextension'

export default function ShoppingList() {
    const [shopitems, setshopitems] = useState();
    useEffect(() => {        
          
            (async function fetch(){
                let dataset = await api.get('/api/products');
                localStorage.setItem('apidata', JSON.stringify(dataset.data));
                setshopitems(dataset.data)
            })()
      }, []);

      if(shopitems === undefined){
        return (
      
            <Fragment>
                <div>
                    <Fourofour/>
                </div>
            </Fragment>
          )
      }
      else{
        return (
      
            <Fragment>
            <div className="container w3-animate-opacity">
               <Listextension items={shopitems} />
               </div>
            </Fragment>
          )
      }
    
}
