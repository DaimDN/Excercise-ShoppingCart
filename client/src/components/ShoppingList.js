import React, {useState, useEffect, Fragment} from 'react'
import api from '../util/api'

export default function ShoppingList() {
    const [shopitems, setshopitems] = useState(undefined);


        useEffect(() => {

                (async function runner(){
                    try {
                        const response = await api.get('/api/products');
                      
                        var HttpStatusCode = response.status;
                        
                        if(HttpStatusCode === 200){
                          var dataset = response.data;
                            setshopitems({items: dataset});
                        }
                      }
                      
                      catch (error) {          
                          console.log(error);
                          setshopitems(undefined);
                      }
                })();
                    
        });
        

        
    

        

    return (
      
      <Fragment>
          <div>
        

           
             
          </div>
      </Fragment>
    )
}
