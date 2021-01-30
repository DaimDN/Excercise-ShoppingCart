import React from 'react'
import Carousel from '../components/Carousel'
import Carousel2 from '../components/Carousel2'

export default function Home() {
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
