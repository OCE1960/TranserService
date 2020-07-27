import React, { Component } from 'react';
import axios from 'axios';
import Pagination from "react-js-pagination";
import { NavLink } from 'react-router-dom'

export default class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            activePage: 1,
            totalItemsCount: 1,
            itemsCountPerPage: 1,
            pageRangeDisplayed:4,
        }
    }


    componentDidMount(){
        axios.get('/api/category')
            .then( res => {
                console.log(res);
                this.setState({
                    categories: res.data.categories.data,
                    activePage: res.data.categories.current_page,
                    totalItemsCount: res.data.categories.total,
                    itemsCountPerPage: res.data.categories.per_page,
                })})
    }

    onDelete(category_id) {

     //   alert(category_id);
         axios.delete('/api/category/delete/'+category_id)
                .then( res => { console.log(res.data)
                      let categories = this.state.categories;
                    for(let i = 0; i< categories.length; i++){
                        if(categories[i].id == category_id){
                            categories.splice(i,1);
                            this.setState({categories:categories});
                        }
                    }  
                })
                .catch( error => console.log(error)); 
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        axios.get('/api/category?page='+pageNumber)
            .then( res => {
                this.setState({
                    categories: res.data.categories.data,
                    activePage: res.data.categories.current_page,
                    totalItemsCount: res.data.categories.total,
                    itemsCountPerPage: res.data.categories.per_page,
                    
                })})
        //this.setState({activePage: pageNumber});
      }

    render() {
        return (
                <section className="">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Category</th>
                                <th scope="col">Status</th>
                                <th scope="col">Created At</th>
                                <th scope="col">Updated At</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.categories.map(category => {
                                    return(
                                        <tr key={category.id}>
                                        <th scope="row">{category.id}</th>
                                        <td>{category.name}</td>
                                        <td>{(category.active)?'Active' : 'Inactive'}</td>
                                        <td>{category.created_at}</td>
                                        <td>{category.updated_at}</td>
                                        <td><NavLink to={`/category/edit/${category.id}`}>Edit</NavLink> |  <a href="#" onClick={this.onDelete.bind(this,category.id)}>Delete</a></td>
                                        </tr>
                                    )
                                })
                            }
                            
                           
                        
                          
                          
                           
                        </tbody>
                    </table>

                    <div className="d-flex justify-content-center">
                        <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                        itemClass="page-item"
                        linkClass="page-link"
                        onChange={this.handlePageChange.bind(this)}
                        />
                    </div>
                </section>   
        );
    }
}


