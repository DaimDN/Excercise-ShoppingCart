import React, {useState, Fragment} from 'react'
import './style.css'

const Listextension = props => {

    const [shop, setshop] = useState(props);
    const [basket, setBasket] = useState([]);
    return (
   
      <Fragment>
     
     <div className="row">
     {basket.map((itemx)=>{
            return <div className="col-2">
            <div class="card mb-4 box-shadow ">
            <div class="card-header" >
            <p>{itemx.name}</p>
            <div className="row">
            <div className="col-7">
            <p className="disable">{itemx.price} £</p>
              </div>
            <div className="col-5"> 
            
            <img className="onl" onClick={()=>{
             const index = basket.indexOf(itemx);
            if (index > -1) {
              basket.splice(index, 1);
            }
              
              
              }} style={{width: '80%'}} src="https://www.flaticon.com/svg/vstatic/svg/3221/3221897.svg?token=exp=1611620121~hmac=c093c8c283552ce6ce5cc16cf84952ab" />
 </div>
            </div>
          

            </div>
           
            </div>
              
            </div>
          })}

     </div>
         
          <h1> Trending Deals </h1>
                       
                    
          <br/>
      <div className="row">
  

      
      {shop.items.map((item)=>{
                    return  <div class="col-4 card-deck mb-3 text-center">
        <div class="card mb-4 box-shadow ">
          <div class="card-header"  style={{backgroundImage: `url(${item.url})`, backgroundSize: 'cover'}}>
          <div style={{backgroundColor: 'rgb(0, 0, 0, 0.6)', height: '100px'}}>
          <br/>
          
          <h4 class=" text-white">{item.name}</h4>
           </div>
          
            
          </div>
          <div class="card-body" >
          <table class="table table-striped">
          <tbody>
          <tr>
     
      <td>Price</td>
      <td>{item.price}</td>
   
    </tr>
    <tr>
     
      <td>Size</td>
      <td>{item.size}</td>
  
    </tr>
    <tr>
    
      <td>StockLevel</td>
      <td>{item.stockLevel}</td>
   
    </tr>
          </tbody>

          </table>

          <div className="row">
            <div className="col-8"> </div>
            <div className="col-4">

          

            
            <button  type="button" onClick={()=>{basket.push(item)}} class="btn btn-lg btn-block btn-primary">Buy</button>
        
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