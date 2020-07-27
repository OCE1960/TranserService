import React, { Component } from 'react';
import axios from 'axios';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

export default class Add extends Component {

    constructor() {
        super();
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            category_name: '',
            message_alert: '',
        }
    }

    onChangeCategoryName(e) {
        this.setState({
            category_name: e.target.value,
        })

    }

    onSubmit(e) {
        e.preventDefault();
        const category = {
            category_name: this.state.category_name,
        }
        //alert(category)

         axios.post('/api/category/store', category)
          .then((res)  => {
              console.log(res.data);
              this.setState({message_alert:'success'});
            
            })
          .catch( (error) => {
              console.log(error);
              this.setState({message_alert:'error'});
            
            });
    }

    render() {
        return (
                <section className="">
                    { (this.state.message_alert == 'success')? <SuccessAlert message="Categories Successfully Created" /> : '' }
                    { (this.state.message_alert == 'error') ? <ErrorAlert message="Error in Adding Categories"/> : '' }
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="category_name">Category Name</label>
                            <input type="text" className="form-control"
                                             id="category_name" 
                                             name="category_name"
                                             value={this.state.category_name}
                                             onChange={this.onChangeCategoryName}
                                             placeholder="Enter Category Name"
                                               />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </section>   
        );
    }
}


