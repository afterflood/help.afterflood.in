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


  class OrganizationListing extends Component {
    render() {
      return (
        <Container>
        <Breadcrumb >
        <BreadcrumbItem><a style={whiteStyle} href="/">Home</a></BreadcrumbItem>
        <BreadcrumbItem active><a style={greenStyle} >Organizations willing to help</a></BreadcrumbItem>
      </Breadcrumb>
        <Row >
          <Col  md="6" >
          <Card  className="card" body>
            <CardTitle className="Vol-title" style={greenStyle}>Free Carpentery work for org</CardTitle>
            <CardText className="cardtext">Are you a public sector/social service institution (charitable hospitals, old age homes, backward community schools, etc) impacted by the floods? A Leading Manufacturing firm would like to help you get back on track by arranging free carpentry services for you</CardText>
            <Button href="https://goo.gl/forms/hwosANvtyQ7tD3CR2" target="_blank" className="Vol-contactbutton" style={greenbgStyle}>Contact</Button>
          </Card>
          </Col>
          <Col  md="6" >
          <Card className="card" body>
            <CardTitle className="Vol-title" style={greenStyle}>Free Service - Appliances Repair</CardTitle>
            <CardText className="cardtext">Information on the brands and dealerships offering free services to restore your appliances damaged in the disaster.<br/> <br/> <br/></CardText>
            <Button href="tel:18002095511" target="_blank" className="Vol-contactbutton" style={greenbgStyle}>Visit</Button>
          </Card>
          </Col>
        </Row>
        </Container>
       
      );
    }
  }
  
  export default OrganizationListing;