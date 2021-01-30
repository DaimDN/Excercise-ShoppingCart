import React, {useState, useEffect} from 'react'
import api from '../util/api'
export default function Order() {

    const [data, setData] = useState(undefined);

    useEffect(()=>{
    
       ( async function Runner(){
            let fetchdata = await api.get('/api/cart');
            let datahold = fetchdata.data;

            setData(datahold);

    })();
    
    }, [data])

   


    

    
    return (
        <div>
        <div className="container">
        <h1 className="display-5">
            Recent Orders
        </h1>
        <hr/>
        {data == null  || data.length === 'undefined'  ? 
        <div>
       
        <h3>No Item available</h3>
        
         </div> :
          <div> 
          

                {data.map((item, index)=>{
                    return <div>
                    <br/><br/>
                  <h1 className="display-4">  Order : {index + 1} </h1>
                  <hr/>
                  
                  
                  
                    <table className="table table-striped" style={{width: '70%'}}>
                        <tbody>
                        

                    {item.map((inner, i)=>{
                        return <tr>

                        
                        
                        <td >{inner.item.name}</td>
                        <td  >{inner.item.size}</td>
                        <td  >{inner.item.price }  £</td>
                                             


                        </tr>
                    })}

                    
                    
                        
                        </tbody>
                        </table>
                    
                     </div>
                })}
               
                
         
          </div>}

        </div>
            
        </div>
    )
}
