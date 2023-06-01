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
            <NavLink to={`/`} title="Ir al inicio">Cleva Tech</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" color="secondary" className="desplegable">
                <Nav className="me-auto">
                    <ButtonGroup aria-label="Basic example" className="desplegable">
                        <NavLink to={`category/63F5KQ32yWGUM7aVsEpO`}>
                            <Button  variant="secondary" className="boton">
                                Celulares
                            </Button>
                        </NavLink>
                        <NavLink to={`category/1L0OXTjqZ56F5oa8Vgil`} >
                            <Button  variant="secondary" className="boton">
                                Tablets
                            </Button>
                        </NavLink>
                        <NavLink to={`category/KqE8AduIVGfVCVhbANdd`} variant="secondary" className="boton">
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