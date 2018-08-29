import React, { Component } from 'react';
import { Card, Button, Container, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'
const greenbgStyle = {
    background:'#00BA91'
  };

  const greenStyle = {
    color :'#00BA91'
  };

  const whiteStyle = {
    color :'black'
  };


  class ApplianceRepair extends Component {
    nextPath(path) {
      this.props.history.push(path);
    }
    render() {
      return (
        <Container>
        <Breadcrumb >
        <BreadcrumbItem><Link style={whiteStyle} to='/'>Home</Link></BreadcrumbItem>
        <BreadcrumbItem active><a style={greenStyle} >Appliance Repair Service</a></BreadcrumbItem>
      </Breadcrumb>
        <Row >
          <Col  md="6" >
          
          </Col>
          <Col  md="6" >
          
          </Col>
        </Row>
        </Container>
       
      );
    }
  }
  
  export default ApplianceRepair;