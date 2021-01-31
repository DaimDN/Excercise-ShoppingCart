import React, { Fragment} from 'react'
import './style.css'

const Listextension = props => {


    const shop = (props);

    return (
   
      <Fragment>
     
     <div className="row">
   
     </div>
         
          <h1> Trending Deals </h1>
                       
                    
          <br/>
      <div className="row">
  

      
      {shop.items.map((item, k)=>{
                    return  <div key={k} className="col-xl-4 col-lg-4 card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow ">
          <div className="card-header"  style={{backgroundImage: `url(${item.url})`, backgroundSize: 'cover'}}>
          <div style={{backgroundColor: 'rgb(0, 0, 0, 0.6)', height: '100px'}}>
          <br/>
          
          <h4 className=" text-white" >{item.name}</h4>
           </div>
          
            
          </div>
          <div className="card-body" >
          <table className="table table-striped">
          <tbody>
          <tr>
     
      <td>Price</td>
      <td >{item.price}</td>
   
    </tr>
    <tr>
     
      <td>Size</td>
      <td >{item.size}</td>
  
    </tr>
    <tr>
    
      <td>StockLevel</td>
      <td >{item.stockLevel}</td>
   
    </tr>
          </tbody>

          </table>

          <div className="row">
            <div className="col-6"> </div>
            <div className="col-6">

            {item.stockLevel <= 0? 
            <div>
            <button onClick={()=>{alert("Out of stock")}}  type="button" className="btn btn-lg btn-block btn-danger disabled" >N/A</button>
            </div>
            
            
            : <div>

           
            

            <button  type="button" onClick={()=>{


              var BasketArray = JSON.parse(localStorage.getItem('myData'));
              var Obj = {item: item};

              var newArray = [];
              
              if(BasketArray === null || BasketArray.length === 0){
                newArray.push(Obj);

              }
              else{

                BasketArray.forEach(function(x){
                newArray.push(x);
              })
              newArray.push(Obj);

              }


                localStorage.setItem('myData', JSON.stringify(newArray));
                window.location.reload();

             
               


              }} className="btn btn-lg btn-block btn-info">Buy</button>
            </div>
            
            
             }

            
           
        
         </div>
          </div>

         
             </div>
        </div>
                    
                        
                            </div>
                        
                        })}
            </div>
        </Fragment>
    )
}


export default Listextension;