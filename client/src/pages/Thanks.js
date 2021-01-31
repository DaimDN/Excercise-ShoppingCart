import React,{useState} from 'react'
import Loader from 'react-loader-spinner'

export default function Thanks() {

    var [action, setAction] = useState(false);


    if(action === false){

        setTimeout(() => {
            setAction(true);
          }, 700);

        return (
            <div className="mx-auto text-center" style={{height: '400px'}}>
            <Loader
            style={{marginTop: '200px'}}
       type="Oval"
       color="#f50057"
       height={100}
       width={100}
       timeout={700} ></Loader>
      </div>
        )
      


    }
    else{
        return (
            <div>
            <br/>
            <br/>
            <div className="container text-center">
            <h1 className="display-3">Thanks for Your Purchase</h1>
            <br/>
            <a href="/orders" className="btn btn-info btn-lg">Order History</a>
            <br/>
            <br/>
    
            </div>
                
            </div>
        )

    }

   
}
