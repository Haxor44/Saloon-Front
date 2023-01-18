import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AppBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">HairApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
            <Link className="book" to='/home'>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="book" to='/service'>Services</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="book" to='/register'>Register</Link>
            </Nav.Link>
            ||
            <Nav.Link>
              <Link className="book" to='/login'>Login</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

    
    </>
  );
}

export default AppBar;