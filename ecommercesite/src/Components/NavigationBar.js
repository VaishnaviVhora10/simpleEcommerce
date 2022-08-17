import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Navbar from 'react-bootstrap/Navbar';
import {AiOutlineShoppingCart} from "react-icons/ai";
import  Dropdown  from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';


function NavigationBar() {
  return (
    <div>
          <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">TeeRex Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#product">Product</Nav.Link>
            
            <Dropdown >
            <Dropdown.Toggle variant="success">
            <AiOutlineShoppingCart color="black" fontsize="50px"/>
            <Badge bg="light">{10}</Badge> 
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark" style={{ minWidth: 370}}>
                <span style={{padding:10}}>Cart is Empty!!</span>
            </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar