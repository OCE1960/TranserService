import React, { Component } from 'react';
import axios from 'axios';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

export default class Edit extends Component {

    constructor(props) {
        super(props);
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            category_name: '',
            message_alert: '',
        }
    }

    componentDidMount(){
         axios.get('/api/category/edit/'+this.props.match.params.id)
            .then( res => {
                console.log(res);
                this.setState({category_name:res.data.category.name})}) 
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

         axios.put('/api/category/update/'+this.props.match.params.id, category)
          .then((res)  => {
              console.log(res.data);
              this.setState({message_alert:'success'});
              location.replace('/category');
            })
          .catch( (error) => {
                    console.log(error);
                    this.setState({message_alert:'error'});
            });
    }

    render() {
        return (
                <section className="">
                    { (this.state.message_alert == 'success')? <SuccessAlert message="Categories Successfully Updated" /> : '' }
                    { (this.state.message_alert == 'error') ? <ErrorAlert message="Error in Updating Categories"/> : '' }
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


