import React, { Component } from 'react';
import { Card, Button, Container, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './css/VolunteerListing.css'

const greenbgStyle = {
    background:'#00BA91'
  };

  const greenStyle = {
    color :'#00BA91'
  };

  const whiteStyle = {
    color :'black'
  };


  class VolunteerListing extends Component {
    render() {
      return (

        <Container>
        <Breadcrumb >
        <BreadcrumbItem><a style={whiteStyle} href="/">Home</a></BreadcrumbItem>
        <BreadcrumbItem active><a style={greenStyle} >Organizations willing to help</a></BreadcrumbItem>
      </Breadcrumb>
        <Row>
          <Col xs="3"></Col>
          <Col xs="6">
          {/* <h1 className="Vol-title" style={greenStyle} >Organizations willing to help</h1> */}
          <Card body>
            <CardTitle className="Vol-title" style={greenStyle}>Free Carpentery work for org</CardTitle>
            <CardText>Are you a public sector/social service institution (charitable hospitals, old age homes, backward community schools, etc) impacted by the floods? A Leading Manufacturing firm would like to help you get back on track by arranging free carpentry services for you</CardText>
            <Button href="https://goo.gl/forms/hwosANvtyQ7tD3CR2" target="_blank" className="Vol-contactbutton" style={greenbgStyle}>Contact</Button>
          </Card>
          </Col>
          <Col xs="3"></Col>
        </Row>
        </Container>
       
      );
    }
  }
  
  export default VolunteerListing;