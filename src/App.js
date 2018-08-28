import React, { Component } from 'react';
import VolunteerListing from './components/VolunteerListing';
import NavigationBar from './components/NavigationBar';
import { Jumbotron, Container } from 'reactstrap';
import './App.css';

const jumboStyle = {
  background:'#00BA91'
};

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavigationBar/>
   
      <Jumbotron fluid style={jumboStyle} >
        <Container fluid >
          <h1 className="display-3">Let's REBUILD KERALA</h1>
        </Container>
      </Jumbotron>
       <VolunteerListing></VolunteerListing> 
      
      </div>
    );
  }
}

export default App;
