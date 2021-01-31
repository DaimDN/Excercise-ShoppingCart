import React, {useState} from 'react'
import Carousel from '../components/Carousel'
import Carousel2 from '../components/Carousel2'
import Loader from 'react-loader-spinner'

export default function Home() {

    var [action, setAction] = useState(false);


    if(action === false){

        setTimeout(() => {
            setAction(true);
          }, 900);

        return (
            <div className="mx-auto text-center" style={{height: '400px'}}>
            <Loader
            style={{marginTop: '200px'}}
       type="Oval"
       color="#f50057"
       height={100}
       width={100}
       timeout={900} ></Loader>
      </div>
        )
      


    }
    else{

        return (
       

            <div style={{marginTop: '-7px'}} className="">
           
            
            <Carousel/>
            <br/>
    
            <h1 className="display-4 text-center">Logum Innovation</h1>
            
            
            
            <div className="container">
            <hr/>
            <br/>
           
            </div>
            <div className="row">
                <div className="col-xl-6">
                
                <div className="container">
                        <div className="row container">
                            <div className="container">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                                <h1 className="display-5">“Innovation is taking two things that exist and putting them together in a new way.“ </h1>
                                <br/>
                                <h3>The Imaginative application of Art & Science </h3>
                                <br/>
                            <br/>
                                
                                <a className="btn btn-info btn-lg" href="/products">Buy products</a>
                            </div>
                           
                        </div>
                        
    
                    </div>
    
                
                </div>
                <div className="col-xl-6">
                <Carousel2/>
                </div>
            </div>
           
            </div>
            
        )

    }


    
}
