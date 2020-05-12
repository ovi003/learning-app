import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Container,
  Button,
} from "reactstrap";
import { navItems } from "../../data";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeModal from "../modals/ThemeModal";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";

const NavbarTop = () => {
  // Define state for collapse is open or not
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
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
  const modalToggle = () => setIsModalOpen(!isModalOpen);
  const signupModalToggle = () => setIsSignupModalOpen(!isSignupModalOpen);
  return (
    <>
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
              <NavItem className="mr-3">
                <Button
                  outline
                  color="light"
                  onClick={modalToggle}
                  className="rounded-pill px-4"
                >
                  Signin
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  color="primary"
                  onClick={signupModalToggle}
                  className="rounded-pill px-4"
                >
                  Signup
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <ThemeModal
        isModalOpen={isModalOpen}
        modalToggle={modalToggle}
        title="Signin"
      >
        <Signin />
      </ThemeModal>
      <ThemeModal
        isModalOpen={isSignupModalOpen}
        modalToggle={signupModalToggle}
        title="Signup"
      >
        <Signup />
      </ThemeModal>
    </>
  );
};

export default NavbarTop;
