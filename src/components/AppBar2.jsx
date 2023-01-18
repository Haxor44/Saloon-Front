import  React from 'react';
import '../styles/home.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class AppBar2 extends React.Component{

  render(){
  return (
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">HairApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
            <Nav.Link href="#pricing">Register</Nav.Link>
            ||
            <Nav.Link href="#pricing">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  );
}
}