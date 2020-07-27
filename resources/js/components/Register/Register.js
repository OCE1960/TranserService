import React, { Component } from "react";
import {  Formik }  from 'formik';
import * as Yup from 'yup'
import {Form, Button, InputGroup, Col} from 'react-bootstrap'


const schema = Yup.object({
    first_name: Yup.string()
      .min(3,'Invalid First Name')
        .required('First Name is a Required Field'),
    middle_name: Yup.string()
        .min(3,'Invalid Middle Name')
        .required('Middle Name is a Required Field'),
    last_name: Yup.string()
        .min(3,'Invalid Last Name')
        .required('Last Name is a Required Field'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is a Required Field'),
    password: Yup.string()
      .min(8, 'Must be 8 characters or or More')
        .required('Password is a Required Field'),
    password_confirmation: Yup.string()
        .min(8, 'Must be 8 characters or or More')
          .required('Confirm Password is a Required Field'),
    
});

class Register extends Component {

    constructor(props){
        super(props);
        this.processRegister = this.processRegister.bind(this);
        this.state = {
            first_name: '',
            middle_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: '',
            message_success: '',
            message_error: '',
        }
    }

    processRegister(data) {

        //alert(data)
    
          axios.post('/api/register', data)
              .then((res) => {
                  this.setState({ message_success: 'success, Account Created' });
                  this.props.history.push("/login?created")  
                })
              .catch((error) => {
                  let errors = error.response.data.errors;
                  console.log(errors);
                  this.setState({message_error: Object.entries(errors)});
                
                });  
    
    }

    render() {

        let errors = (this.state.message_error) ? this.state.message_error.map((error, index) => <p key={index} className="alert alert-danger" >{error[1]}</p>) : '';
        let sucessMessage = (this.state.message_success) ? <p className="alert alert-success">{ this.state.message_success } </p> : '';
    

        return (

            <div className="container" id="register">

                <div className="row justify-content-center">
                    <div className="col-sm-6 card mt-4 mb-4 p-4">
                        <h2 className="mb-4">Create a New Account</h2>
                        {errors}
                        { sucessMessage }
                        <Formik
                            validationSchema={schema}
                            onSubmit={(values) => { this.processRegister(values) }}
                            initialValues={{
                                first_name: '',
                                middle_name: '',
                                last_name: '',
                                email: '',
                                password: '',
                                password_confirmation: '',
                                message_alert: '',
                            }}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                handleReset,
                                resetForm,
                                values,
                                touched,
                                isValid,
                                isInvalid,
                                errors,
                                isSubmitting,
                                
                            }) => (
                                    <Form noValidate onSubmit={handleSubmit} id="registerForm">
                    
                                        <Form.Row>
                                            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
                                                <Form.Label>First Name</Form.Label>
                                                <InputGroup>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="First Name"
                                                        name="first_name"
                                                        value={values.first_name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        isValid={touched.first_name && !errors.first_name}
                                                        isInvalid={!!(touched.first_name && errors.first_name)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.first_name}
                                                    </Form.Control.Feedback>
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                        </Form.Row>
                                    
                                        <Form.Row>
                                            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
                                                <Form.Label>Middle Name</Form.Label>
                                                <InputGroup>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Middle Name"
                                                        name="middle_name"
                                                        value={values.middle_name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        isValid={touched.middle_name && !errors.middle_name}
                                                        isInvalid={!!(touched.middle_name && errors.middle_name)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.middle_name}
                                                    </Form.Control.Feedback>
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                        </Form.Row>
                                    
                                        <Form.Row>
                                            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
                                                <Form.Label>Last Name</Form.Label>
                                                <InputGroup>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Last Name"
                                                        name="last_name"
                                                        value={values.last_name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        isValid={touched.last_name && !errors.last_name}
                                                        isInvalid={!!(touched.last_name && errors.last_name)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.last_name}
                                                    </Form.Control.Feedback>
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                        </Form.Row>
                                    
                                        <Form.Row>
                                            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
                                                <Form.Label>Email</Form.Label>
                                                <InputGroup>
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="Email"
                                                        name="email"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        isValid={touched.email && !errors.email}
                                                        isInvalid={!!(touched.email && errors.email)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.email}
                                                    </Form.Control.Feedback>
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                        </Form.Row>
                                    
                                        <Form.Row>
                                            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
                                                <Form.Label>Password</Form.Label>
                                                <InputGroup>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Enter Password"
                                                        name="password"
                                                        value={values.password}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        isValid={touched.password && !errors.password}
                                                        isInvalid={!!(touched.password && errors.password)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.password}
                                                    </Form.Control.Feedback>
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
                                                <Form.Label>Password</Form.Label>
                                                <InputGroup>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Confirm Password"
                                                        name="password_confirmation"
                                                        value={values.password_confirmation}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        isValid={touched.password_confirmation && !errors.password_confirmation}
                                                        isInvalid={!!(touched.password_confirmation && errors.password_confirmation)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.password_confirmation}
                                                    </Form.Control.Feedback>
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                        </Form.Row>

                                        <Button type="submit" disabled={!(isValid)}  >Register</Button>
                                        <Button type="button" onClick={handleReset} className="float-right" variant="warning"  >Reset</Button>
                                    </Form>
                                )}
                        </Formik>
                    </div>
                </div>
            
            </div>

        
        );
    }

}

export default Register;

