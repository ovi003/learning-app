import React from "react";
import { Container, Row, Col } from "reactstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <Row>
          <Col lg={4}>
            <h5 className="text-white mb-0">About</h5>
            <hr style={{ borderColor: "#aaa" }} className="my-2" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              dolore iure.
            </p>
          </Col>
          <Col lg={4}>
            <h5 className="text-white mb-0">Useful Links</h5>
            <hr style={{ borderColor: "#aaa" }} className="my-2" />
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Features
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={4}>
            <h5 className="text-white mb-0">Contact Us</h5>
            <hr style={{ borderColor: "#aaa" }} className="my-2" />
            <p>Please, Feel free to contact with us</p>
            <ul className="list-unstyled">
              <li>
                <a className="text-white" href="tel:01737849397">
                  01737849397
                </a>
              </li>
              <li>
                <a className="text-white" href="mailto:mhcovi003@gmail.com">
                  mhcovi003@gmail.com
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
