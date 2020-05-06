import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import about from "../../assets/img/9.jpg";

function About() {
  return (
    <section className="#about">
      <Container>
        <h2 className="text-center">About Us</h2>
        <hr className="hr-short" />
        <Row className="align-items-center mt-4">
          <Col lg="6">
            <img src={about} className="img-fluid rounded" alt="" />
          </Col>
          <Col lg="6" className="pl-4">
            <h3>We Are Tech Expert</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto autem placeat optio possimus! Vero commodi sint
              blanditiis saepe neque nemo fugit corrupti laudantium voluptas
              accusamus, porro voluptatem, reiciendis at consectetur.
            </p>
            <Button color="primary" className="mr-3 ">
              Learn More
            </Button>
            <Button outline color="secondary">
              Our Services
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
