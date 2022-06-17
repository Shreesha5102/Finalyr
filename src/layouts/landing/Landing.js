import React, { Component } from 'react';
import '../../css/bootstrap.min.css'
import '../../css/style.css'
import img1 from "../../img/prop1.jpg";
import '../../App.css';

// import LoginButtonContainer from '../../user/ui/loginbutton/LoginButtonContainer'
// import LogoutButtonContainer from '../../user/ui/logoutbutton/LogoutButtonContainer'


class Landing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='container fluid'>
        <div className='row1'>
          <div className="jumbotron text-center">
                <h1>Welcome to Rideshare</h1>
                <p className="splash-subhead">
                    Look for Rides around the World, and pay with your favorite Cryptocurreny <strong>"Ethereum"</strong>
                </p>
                <p className='row'>
                    <div className='col'></div>
                    <div className='col-4' id="landform">
                        <a href="/signup" className="btn btn-primary">Sign Up</a>
                    </div>
                    <div className='col'></div>
                </p>
          </div>
        </div>
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h3 className="section-heading text-uppercase">Services We offer</h3>
                    <h3 className="section-subheading text-muted"></h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-car fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">RideSharing</h4>
                        <p className="text-muted">Empowering both drivers and riders with peer to peer ecosystem</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-cube fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Blockchain</h4>
                        <p className="text-muted">Blockchain enables riders via the decentralized network to communicate directly with drivers. </p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Safe Ride</h4>
                        <p className="text-muted">Transactions are completed using Immuatble decentralised ledger and hash functions</p>
                    </div>
                </div>
            </div>
        </section>
    
        <p>



        </p>

        <div className='row'>
          <div className="col-sm-6">
            <h3><b>Why Choose Us?</b></h3><br></br>
            <h5>Ride sharing services have emerged as an alternative transportation service that allows people to use personal cars efficiently.We here by propose a Smart transport system by implementing peer to peer Decentralized Ride-Sharing Application based on smart contracts on the Ethereum Blockchain</h5><br></br>
            <div className="row gy-5 gx-4">
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-success me-3">
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <h5 className="mb-0">Transparency</h5>
                            </div>
                            
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-success me-3">
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <h5 className="mb-0">Data Protection</h5>
                            </div>
                            
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-success me-3">
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <h5 className="mb-0">Afordable Ride</h5>
                            </div>
                            
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-success me-3">
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <h5 className="mb-0">Traceability</h5>
                            </div>
                            
                        </div>
                    </div>

          </div>


          <div className="col-sm-6">
             <img id="img1" src={img1} className='rounded mx-auto d-block' alt="no image"/>
          </div>
        </div>
        
        

         <div className='row'>
          <div className="about-section">
       <p>



        
       </p>
           {/* <h1 id="contact-us">Contact US!</h1>
            <p>.</p> */}
           <p id="info">Developed by Team Manoj</p>
          </div>
       </div>

     
        

    </div>
      
      
    )
  }
}

export default Landing
