import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardTitle, CardText } from 'reactstrap';
import './css/Home.css';

  const greenStyle = {
    color :'#00BA91'
  };


 

  class Home extends Component {
    nextPath(path) {
      this.props.history.push(path);
    }
    render() {
      return (
        <Container>
        <Row >
          <Col  md="4" >
          
          </Col>
          <Col  md="4" >
          <Link to="orglist">
          <Card className="card" body>
          <img className="icon" alt="Organizations willing to help" src="https://raw.githubusercontent.com/aswinavofficial/reimagineimages/master/help.png" />
            <CardTitle className="Vol-title" style={greenStyle}>Organizations willing to help</CardTitle>
            <CardText className="cardtext"></CardText>
             
          </Card>
          </Link>
          </Col>
          <Col md="4">

          </Col>
        </Row>
        </Container>
       
      );
    }
  }
  
  export default Home;