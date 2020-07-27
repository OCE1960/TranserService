import React, { Component, Suspense, lazy, useEffect, useState } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute'
import { getToken, removeUserSession, setUserSession } from '../utils/Auth'
const Home = lazy(() => import("../Home/Home"));
const About = lazy(() => import("../About/About"));
const Contact = lazy(() => import("../Contact/Contact"));
const Services = lazy(() => import("../Services/Services"));
const PortFolio = lazy(() => import("../Portfolio/Portfolio"));
const Blog = lazy(() => import("../Blog/Blog"));
const Faq = lazy(() => import("../Faq/Faq"));
const Register = lazy(() => import("../Register/Register"));
const Login = lazy(() => import("../Login/Login"));
const Category = lazy(() => import("../category/Index"));
const Dashboard = lazy(() => import("../Backend/Dashboard/Dashboard"));
const Logout = lazy(() => import("../Logout/Logout"));
const NotFound = lazy(() => import("../NotFound/NotFound"));

function Header() {
     
    const [authLoading, setAuthLoading] = useState(true);
 
    useEffect(() => {
      const token = getToken();
      if (!token) {
        return;
      }
   
      axios.get('/api/refresh').then(response => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      }).catch(error => {
        removeUserSession();
        setAuthLoading(false);
      });
    }, []);
   
    if (authLoading && getToken()) {
      return <div className="content">Checking Authentication...</div>
    }
  

        return (
                <header className="">
                    <div className="" id="navbar">
                        <nav className="navbar navbar-expand-lg container">
                        <a className="navbar-brand" href="#">
                           OCE
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon">
                            <i className="fas fa-bars"></i>
                            </span>
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarTogglerDemo02"
                        >
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink
                                exact
                                activeClassName="active"
                                to={"/"}
                                className="nav-link"
                                >
                                Home <span className="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                className="nav-link"
                                activeClassName="active"
                                to={"/about"}
                                >
                                About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                className="nav-link"
                                activeClassName="active"
                                to={"/services"}
                                >
                                Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                className="nav-link"
                                activeClassName="active"
                                to={"/portfolio"}
                                >
                                portfolio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                className="nav-link"
                                activeClassName="active"
                                to={"/blog"}
                                >
                                Blog
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                className="nav-link"
                                activeClassName="active"
                                to={"/faq"}
                                >
                                FAQ
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                className="nav-link"
                                activeClassName="active"
                                to={"/category"}
                                >
                                Category
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                className="nav-link"
                                href="#"
                                activeClassName="active"
                                to={"/contact"}
                                >
                                Contact
                                </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink
                                className="nav-link"
                                href="#"
                                activeClassName="active"
                                to={"/register"}
                                >
                                Register
                                </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink
                                className="nav-link"
                                href="#"
                                activeClassName="active"
                                to={"/dashboard"}
                                >
                                Dashboard
                                </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink
                                className="nav-link"
                                href="#"
                                activeClassName="active"
                                to={"/login"}
                                >
                                Login
                                </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink
                                className="nav-link"
                                href="#"
                                activeClassName="active"
                                to={"/logout"}
                                >
                                Logout
                                </NavLink>
                            </li>
                            </ul>
                        </div>
                        </nav>
                    </div>
                    <Suspense fallback={<div id="spinner" className="spinner-border" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>}>
                        <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/about" component={About} />
                        <Route path="/services" component={Services} />
                        <Route path="/portfolio" component={PortFolio} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/faq" component={Faq} />
                        <Route path="/register" component={Register} />
                        <PublicRoute path="/login" component={Login} />
                        <Route path="/category" component={Category} />
                        <PrivateRoute path="/dashboard" component={Dashboard} />
                        <Route path="/logout" component={Logout} />
                        <Route component={NotFound} />
                        </Switch>
                    </Suspense>
                </header>   
        );
    }
        
    export default Header;
        
    
