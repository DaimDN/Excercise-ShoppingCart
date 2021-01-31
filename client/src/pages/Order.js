import React, {useState, useEffect, useRef} from 'react'
import api from '../util/api'
import ReactToPrint from 'react-to-print';
export default function Order() {

    const [data, setData] = useState(undefined);
    const componentRef = useRef();

    useEffect(()=>{
    
       ( async function Runner(){
            let fetchdata = await api.get('/api/cart');
            let datahold = fetchdata.data;

            setData(datahold);

    })();
    
    }, [data])

    return (
        <div ref={componentRef}>
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
        

         <ReactToPrint
        trigger={() =>  <button className="btn btn-lg btn-dark text-white">Print</button>}
        content={() => componentRef.current}
                />

                
                {data.map((item, index)=>{
                    return <div key={index}>
                    <br/><br/>
                  <h1 className="display-6 ">  Order No : {index + 44556760} </h1>
                  <br/>
                 
                  
                  
                  
                    <table className="table table-striped" style={{width: '80%'}}>
                    <thead className="bg-dark text-white">
                        <tr>
                        <th className="text-white">Item No:</th>
                        <th className="text-white">Product Name</th>
                        <th className="text-white">Item Size</th>
                        <th className="text-white"> Item Price  £</th>

                        </tr>

                    </thead>
                        <tbody>
                        

                    {item.map((inner, i)=>{
                        return <tr key={i}>

                        
                        <td >{i+ 1}</td>
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
        </div>
    )
}
