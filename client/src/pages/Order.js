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
    
    })
    
    return (
        <div>
        <div className="container">
        <h1 className="display-5">
            Recent Orders
        </h1>
        <hr/>
        {data == null || data.length === undefined ? 
        <div>
        <h1>No Item available</h1>
        
         </div> :
          <div> 
          

                {data.map((item, index)=>{
                    return <div>
                    <br/>
                  <h4>  Order # {index + 1} </h4>
                  <hr/>
                  <br/>
                  
                  
                    <table class="table table-striped" style={{width: '70%'}}>
                        <tbody>
                        <tr>

                    {item.map((inner)=>{
                        return <div>

                        
                        
                        <td>{inner.item.name}</td>
                        <td>{inner.item.size}</td>
                        <td>{inner.item.price }  £</td>
                       


                        </div>
                    })}
                    </tr>
                        
                        </tbody>
                        </table>
                    
                     </div>
                })}
         
          </div>}

        </div>
            
        </div>
    )
}
