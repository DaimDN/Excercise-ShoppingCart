import React, {useState, Fragment} from 'react'

const Listextension = props => {

    const [shop, setshop] = useState(props);
    const [basket, setBasket] = useState([]);
    return (
   
      <Fragment>
      <div className="row">
      
      {shop.items.map((item)=>{
                    return <div className="col-4">
                    <h1> {item.name} </h1>
                    <p className="lead"> {item.price}</p>
                    <p className="lead"> {item.size}</p>
                    <p className="lead"> {item.stockLevel}</p>
                    <p className="lead"> {item.sku}</p>

                   <button className="btn btn-primary" onClick={()=>{basket.push(item)}} >Add</button>
                        
                            </div>
                        
                        })}
            </div>
        </Fragment>
    )
}


export default Listextension;