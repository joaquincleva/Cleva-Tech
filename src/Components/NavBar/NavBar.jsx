import CartWidget from "../CartWidget";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    return(
        <Navbar bg="dark" expand="md">
        <Container>
          <Navbar.Brand>Cleva Tech</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" color="secondary">
                <Nav className="me-auto">
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary" className="boton" href="#">Celulares</Button>
                        <Button variant="secondary" className="boton" href="#">Tablets</Button>
                        <Button variant="secondary" className="boton" href="#">Notebooks</Button> 
                    </ButtonGroup>
                </Nav>
                <Nav>
                    <CartWidget className="carrito"/>
                </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar