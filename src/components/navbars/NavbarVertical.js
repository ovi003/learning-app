import React, { useState } from "react";
import { Navbar, NavItem, Nav, Collapse } from "reactstrap";
import Background from "../helper-components/Background";
import bgImage from "../../assets/img/2.jpg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarVertical = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Navbar
      color="light"
      light
      expand="lg"
      className="navbar-vertical"
      data-toggle="something"
    >
      <Collapse className="w-100" isOpen={isOpen}>
        <h6 className=" text-secondary">Home</h6>
        <Nav navbar>
          <NavItem>
            <NavLink className="nav-link pl-0" to="/dashboard">
              <FontAwesomeIcon icon="chart-bar" className="text-muted mr-2" />
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link pl-0" to="/projects">
              <FontAwesomeIcon icon="th" className="text-muted mr-2" />
              Projects
            </NavLink>
          </NavItem>
        </Nav>
        <hr />
        <h6 className="text-secondary mt-3">Email</h6>
        <Nav navbar>
          <NavItem>
            <NavLink className="nav-link pl-0" to="/">
              <FontAwesomeIcon icon="envelope" className="text-muted mr-2" />
              Inbox
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link pl-0" to="/">
              <FontAwesomeIcon icon="edit" className="text-muted mr-2" />
              Compose
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarVertical;
