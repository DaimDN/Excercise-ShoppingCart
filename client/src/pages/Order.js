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
        {data == null  || data.length === 0  ?<div>
       
        <h3>No Item available</h3>
        <br/>
        <br/>
        <a href="/products" className="btn btn-primary btn-lg" >Order Now</a>
        
         </div> :<div> 
         <a href="/products" className="btn btn-primary btn-lg">Order More</a>  &nbsp; 
          <button href="/" className="btn btn-info btn-lg">Reset Orders</button>         

                {data.map((item, index)=>{
                    return <div key={index}>
                    <br/><br/>
                  <h1 className="display-5">  Order : {index + 1} </h1>
                 
                  
                  
                  
                    <table className="table table-striped" style={{width: '70%'}}>
                    <thead className="bg-dark text-white">
                        <tr>
                        <th className="text-white">Product Name</th>
                        <th className="text-white">Item Size</th>
                        <th className="text-white"> Item Price  £</th>

                        </tr>

                    </thead>
                        <tbody>
                        

                    {item.map((inner, i)=>{
                        return <tr key={i}>

                        
                        
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
