import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small unique-color-dark">

           
            <div className="container-fluid text-center text-md-left mt-5 footer pt-4">
          
             
              <div className="row mt-2">
          
               
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
                  
                  <h6 className="text-uppercase font-weight-bold"><i className="fa fa-handshake"></i>  Social Media</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto"  />
          
          
                  <p>
                    <a className="fb-ic" href="https://web.facebook.com/CENPECE" target="new" >
                    <i className="fab fa-facebook-square mr-4"></i> Facebook
                    </a> 
                  </p>
          
                  <p>
                    <a className="fb-ic" href="#">
                    <i className="fab fa-twitter-square mr-4"></i> Twitter
                    </a> 
                  </p>
                  
                  <p>
                    <a className="fb-ic" href="#">
                    <i className="fab fa-linkedin mr-4"></i> Linkedin
                    </a> 
                  </p>
          
                  <p>
                    <a className="fb-ic" href="#">
                      <i className="fab fa-instagram mr-4"></i> Instagram
                    </a> 
                  </p>
          
                </div>
                
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
                  
                  <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"  />
                  <p>
                    <a href="{{route('contact')}}">Contact Us</a>
                  </p>
                  <p>
                  <a href="{{ route('programs') }}">Services</a>
                  </p>
                  <p>
                    <a href="{{route('about')}}">About Us</a>
                  </p>
                  <p>
                    <a href="{{ route('directors') }}">FAQ</a>
                  </p>
          
                </div>
               
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
                 
                  <h6 className="text-uppercase font-weight-bold">Contact</h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"  />
                  <p>
                    <i className="fas fa-home mr-3"></i>
                    No 43 Nouakchott Street, Zone 1, Wuse, Abuja, FCT
                </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> info@oce.com.ng
                </p>
                  <p>
                    <i className="fas fa-phone-alt mr-3"></i>  +234(0)703-379-1783
                </p>
                  <p>
                    <i className="fas fa-phone-alt mr-3"></i>  +234(0)706-151-6323
                </p>
          
                </div>
               
          
              </div>
             
          
            </div>
           
            <div className="footer-copyright text-center py-3"> Copyright © 2020
              <a href="https://oce.com.ng"> OCE - All Rights Reserved.</a>
            </div>
       
          
          
          
          </footer> 
        );
    }
}


