import React, { useState } from "react";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

const DashboardNavbarTop = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" light expand="lg">
      <Link to="/dashboard" className="navbar-brand d-flex align-items-center">
        <span className="logo">LA</span>
        Learning App
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="ml-auto">
          <NavItem>
            <NavLink className="nav-link" to="/">
              Logout
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default DashboardNavbarTop;
