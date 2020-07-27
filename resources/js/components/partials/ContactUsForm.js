import React, { Component } from "react";
import {  Formik }  from 'formik';
import * as Yup from 'yup'
import {Form, Button, InputGroup, Col} from 'react-bootstrap'


const schema = Yup.object({
    name: Yup.string()
      .max(50, 'Must be 15 characters or less')
      .required('Name is a Required Field'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is a Required Field'),
    message: Yup.string()
      .max(198, 'Must be 20 characters or less')
      .required('Message is a Required Field'),
    
});

function ContactUsForm() {

    return (
       
        <Formik
        validationSchema={schema}
        // onSubmit={console.log}
        onSubmit = { (values) => { alert(JSON.stringify(values, null, 2))}}
        initialValues={{
          name: '',
          email: '',
          message: '',
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
              <Form.Group as={Col} md="12" controlId="validationFormik01">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.name && !errors.name}
                  isInvalid={!!(touched.name && errors.name)}
                />
                <Form.Control.Feedback type="invalid">
                {errors.name}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
              <Form.Group as={Col} md="12" controlId="validationMessage">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <Form.Control
                    as="textarea"
                    rows="4"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.message && !errors.message}
                    isInvalid={!!(touched.message && errors.message)}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
           
            <Button type="submit" disabled={isSubmitting} >Submit form</Button>
          </Form>
        )}
      </Formik>

        
    );

}

export default ContactUsForm;

