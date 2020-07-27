import React, { Component, Suspense, lazy } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

const Add = lazy(() => import("./Add"));
const Edit = lazy(() => import("./Edit"));
const Listing = lazy(() => import("./Listing"));

export default class Category extends Component {
    render() {
        return (
                <section className="">
                   
                            <ul className="ml-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink
                                exact
                                activeClassName="active"
                                to={"/category/add"}
                                className="nav-link"
                                >
                                Add
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                className="nav-link"
                                activeClassName="active"
                                to={"/category"}
                                >
                                Listing
                                </NavLink>
                            </li>
                            </ul>
    
                    <Suspense fallback={<div id="spinner" className="spinner-border" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>}>
                        <Switch>
                            <Route exact path="/category/add" component={Add} />
                            <Route exact path="/category/edit/:id" component={Edit} />
                            <Route path="/category" component={Listing} />
                        </Switch>
                    </Suspense>
                </section> 
              
        );
    }
}


