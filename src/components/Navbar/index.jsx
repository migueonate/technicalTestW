import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarHome() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>Store</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/payment">Products</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;
