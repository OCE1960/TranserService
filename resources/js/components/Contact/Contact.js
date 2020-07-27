import React, { Component } from 'react';
import ContactUsForm from '../partials/ContactUsForm'

export default class Contact extends Component {
    render() {
        return (
            <div className="container mt-2">

            <div className="row justify-content-center ">
                  <div className="col-md-7 shadow p-3 mb-5 bg-white rounded"> 
                    <h1 id="oce" className="card-header">Contact OCE</h1>
                    <h4 className="card-body"><i className="fas fa-map-marker-alt mr-4"></i>Lagos Street Phase 2 Site 1 Kubwa, Abuja</h4>
                    <h4 className="card-body"><i className="fas fa-mobile-alt mr-4"></i> 07061516323</h4>
                    <h4 className="card-body"><i className="fas fa-envelope mr-4"></i> okeke.emeka@oce.com.ng</h4>
                  </div>
              </div>
    
    
            <div className="row justify-content-center ">
                  <div className="col-md-7 shadow p-3 mb-5 bg-white rounded"> 
                      <ContactUsForm></ContactUsForm>
             </div> </div> </div> 
        );
    }
}


