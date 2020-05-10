import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import { navItems } from "../../data";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarTop = () => {
  // Define state for collapse is open or not
  const [isOpen, setIsOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState("bg-transparent");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNavbarColor("bg-dark");
      } else {
        setNavbarColor("bg-transparent");
      }
    });
  }, []);

  // Handle click on toggle button click
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar
      dark
      expand="lg"
      className={navbarColor + " navbar-theme"}
      fixed="top"
    >
      <Container>
        <NavbarBrand href="/">Learning Task</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse navbar isOpen={isOpen}>
          <Nav className="ml-auto" navbar>
            {navItems.map((item, index) => (
              <NavItem key={index}>
                <NavLink exact className="px-3 nav-link" to={item.url}>
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="mr-2"
                    transform="shrink-1"
                  />
                  {item.title}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
