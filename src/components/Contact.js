import React, { Component } from 'react';
import {Container } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

  const greenStyle = {
    color :'#00BA91'
  };

  const whiteStyle = {
    color :'black'
  };
 

  class Contact extends Component {
    nextPath(path) {
      this.props.history.push(path);
    }
    render() {
      return (
        <Container>
        <Breadcrumb >
        <BreadcrumbItem><Link style={whiteStyle} to='/'>Home</Link></BreadcrumbItem>
        <BreadcrumbItem active><a style={greenStyle} >Contact Us</a></BreadcrumbItem>
      </Breadcrumb>
        </Container>
       
      );
    }
  }
  
  export default Contact;