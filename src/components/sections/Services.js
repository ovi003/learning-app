import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import first from "../../assets/img/s-1.png";
import second from "../../assets/img/s-2.png";
import third from "../../assets/img/s-3.png";

function Services() {
  return (
    <section className="text-center bg-light" id="#services">
      <Container>
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          <Col lg="4">
            <img src={first} alt="" width="100" className="mb-3" />
            <h4>Development</h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit dian lsoa
              dilw.
            </p>
            <Button color="link">Read more</Button>
          </Col>
          <Col lg="4">
            <img src={second} alt="" width="100" className="mb-3" />
            <h4>Design</h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit manasia
              dian diana lip.
            </p>
            <Button color="link">Read more</Button>
          </Col>
          <Col lg="4">
            <img src={third} alt="" width="100" className="mb-3" />
            <h4>Marketing</h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit disna
              dilsa main.
            </p>
            <Button color="link">Read more</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
