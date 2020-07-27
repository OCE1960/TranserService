import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer'

export default class Index extends Component {
    render() {
        return (
            <div className="">
                <Header />

                <Footer />
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render( <Router><Index /></Router>, document.getElementById('root'));
}
