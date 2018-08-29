import React, { Component } from 'react';
import { Card, Button, Container, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import PhotoGrid from "react-photo-feed";

import "react-photo-feed/library/style.css";


const greenbgStyle = {
    background:'#00BA91'
  };

  const greenStyle = {
    color :'#00BA91'
  };

  const whiteStyle = {
    color :'black'
  };
 
  const applRepairAds = [
	{
		id : 1, src : "https://raw.githubusercontent.com/aswinavofficial/reimagineimages/master/1.jpg",
		bigSrc : "https://raw.githubusercontent.com/aswinavofficial/reimagineimages/master/1.jpg"
	},
	{
		id : 2, src : "https://raw.githubusercontent.com/aswinavofficial/reimagineimages/master/2.jpg",
		bigSrc : "https://raw.githubusercontent.com/aswinavofficial/reimagineimages/master/2.jpg"
	},
	{
		id : 3, src : "https://raw.githubusercontent.com/aswinavofficial/reimagineimages/master/3.jpg",
		bigSrc : "https://raw.githubusercontent.com/aswinavofficial/reimagineimages/master/3.jpg"
	},
	{
		id : 4, src : "https://raw.githubusercontent.com/aswinavofficial/reimagineimages/master/4.jpg",
		bigSrc : "https://raw.githubusercontent.com/aswinavofficial/reimagineimages/master/4.jpg"
	},
	{
		id : 5, src : "https://raw.githubusercontent.com/aswinavofficial/reimagineimages/master/5.jpg",
		bigSrc : "https://raw.githubusercontent.com/aswinavofficial/reimagineimages/master/5.jpg"
	},
	{
		id : 6, src : "https://raw.githubusercontent.com/aswinavofficial/reimagineimages/master/6.jpg",
		bigSrc : "https://raw.githubusercontent.com/aswinavofficial/reimagineimages/master/6jpg"
	}
];

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
      <PhotoGrid columns={3} photos={applRepairAds} />
        </Container>
       
      );
    }
  }
  
  export default ApplianceRepair;