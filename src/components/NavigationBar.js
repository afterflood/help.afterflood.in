import React from 'react';
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

  const greenStyle = {
    color: '#00BA91'
  };

  const blackStyle = {
    color: '#555D75'
  };

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand ><Link style={greenStyle} to='/'>Reimagine Kerala</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink ><Link style={blackStyle} to='/orglist'>Organizations willing to help</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink  ><Link style={blackStyle} to='/'>Contact Us</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}


export default NavigationBar;