import CartWidget from "../CartWidget";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    return(
        <Navbar bg="dark" expand="md" className="navbar">
        <Container>
          <Navbar.Brand>
            <NavLink to={`/`}>Cleva Tech</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" color="secondary">
                <Nav className="me-auto">
                    <ButtonGroup aria-label="Basic example">
                        <NavLink to={`category/Celulares`}>
                            <Button  variant="secondary" className="boton">
                                Celulares
                            </Button>
                        </NavLink>
                        <NavLink to={`category/Tablets`} >
                            <Button  variant="secondary" className="boton">
                                Tablets
                            </Button>
                        </NavLink>
                        <NavLink to={`category/Notebooks`} variant="secondary" className="boton">
                            <Button  variant="secondary" className="boton">
                                Notebooks
                            </Button>
                        </NavLink> 
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