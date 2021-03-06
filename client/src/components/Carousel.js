import React from 'react'

export default function Carousel() {
    return (
        <div className="w3-animate-zoom">
            <div style={{backgroundImage: 'url(images/1.jpg)', height: '500px', backgroundSize: 'cover'}}  className="carousel slide" >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7">
                            <h1 className="display-2">Innovative and Experience </h1>
                            <br/>
                            <h3>The Imaginative application of Art & Science </h3>
                            
                            <a className="btn btn-info btn-lg" href="/products">Buy products</a>
                        </div>
                        <div className="col-xl-5 col-lg-5"></div>
                    </div>
                    

                </div>

        </div>
            </div>
     
        
    )
}
