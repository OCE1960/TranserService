import React, { Component } from "react";
import {  Formik }  from 'formik';
import * as Yup from 'yup'
import { Form, Button, InputGroup, Col } from 'react-bootstrap'
import { setUserSession } from '../utils/Auth'


const schema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is a Required Field'),
    password: Yup.string()
      .max(198, 'Must be 20 characters or less')
        .required('Message is a Required Field'),    
});

function Login(props)  {


 
   const processLogin = (data) => {

       //alert(JSON.stringify(data));
    
          /* axios.post('/api/login', data)
              .then((res) => {
                  this.setState({ message_success: 'success' });
                  location.replace("/login?created")     
                })
              .catch((error) => {
                  let errors = error.response.data.errors;
                  console.log(errors);
                  this.setState({message_error: Object.entries(errors)});
                });  */
       
                axios.post('/api/login', data).then(response => {
                    //setLoading(false);
                    setUserSession(response.data.access_token, response.data.user);
                    props.history.push('/');
                  }).catch(error => {
                   // setLoading(false);
                    if (error.response.status === 401) setError(error.response.data.message);
                    else setError("Something went wrong. Please try again later.");
                  });
    
    }
 
    

    return (

        <div className="container" id="login" >

            <div className="row justify-content-center">
                <div className="col-sm-6 card mt-4 mb-4 p-4">
                    <h2 className="mb-4">Login to Create A Session</h2>
                        <Formik
                            validationSchema={schema}
                            // onSubmit={console.log}
                            onSubmit = { (values) => { processLogin(values)}}
                            initialValues={{   
                            email: '',
                            password: '',
                            }}
                            >
                            {({
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            values,
                            touched,
                            isValid,
                            errors,
                            isSubmitting,
                            }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                    
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

                                <Button type="submit" disabled={isSubmitting} >Login</Button>
                            </Form>
                            )}
                        </Formik>
                    </div>
            </div>           
        </div>
        
        );
}

export default Login;

