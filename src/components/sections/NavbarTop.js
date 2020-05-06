import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { navItems } from "../../data";
const NavbarTop = () => {
  // Define state for collapse is open or not
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navbars = document.querySelectorAll(".navbar-theme");
      navbars.forEach((item, index) => {
        if (window.scrollY > 100) {
          item.classList.remove("bg-transparent");
          item.classList.add("bg-dark");
        } else {
          item.classList.remove("bg-dark");
          item.classList.add("bg-transparent");
        }
      });
    });
  }, []);

  // Handle click on toggle button click
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar
      dark
      expand="lg"
      className="bg-transparent navbar-theme"
      fixed="top"
    >
      <Container>
        <NavbarBrand href="/">Learning Task</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse navbar isOpen={isOpen}>
          <Nav className="ml-auto" navbar>
            {navItems.map((item, index) => (
              <NavItem key={index}>
                <NavLink className="px-4 text-white" href={item.url}>
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
