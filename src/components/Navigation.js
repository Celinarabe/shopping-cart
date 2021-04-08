import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand as={Link} to="/">
          Cool Logo
        </Navbar.Brand>
        {/* Navbar Toggle collapses the navbar collapse component at a breakpoint */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
