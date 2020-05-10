import React, { useState } from "react";
import {
  Container,
  Row,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
  Form,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [messageLengh, setMessageLength] = useState(50);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
    if (name === "message") {
      console.log(value.length);
      const length = 50 - value.length;
      setMessageLength(length);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <section className="bg-light">
      <Container>
        <h2 className="text-center">Contact</h2>
        <hr className="hr-short" />
        <Row className="justify-content-center">
          <Col lg="6">
            {isSubmitted && (
              <div className="alert alert-success">
                <p className="mb-0">
                  Hello <strong>{fields.name}</strong>! Your form is submitted
                  successfully. Your opinion is very important to us. After
                  reviewing your message we will reply to{" "}
                  <strong>{fields.email}</strong>. Thank you.
                </p>
              </div>
            )}
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={fields.name}
                  placeholder="Name"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="text"
                  name="email"
                  value={fields.email}
                  placeholder="Email"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Message</Label>
                <Input
                  type="textarea"
                  rows={5}
                  name="message"
                  value={fields.message}
                  placeholder="Your message"
                  onChange={handleChange}
                />
                <span className="text-muted" style={{ fontSize: "13px" }}>
                  <FontAwesomeIcon icon="info-circle" className="mr-2" />
                  You can type maximum {messageLengh} characters
                </span>
              </FormGroup>
              <Button className="px-5" type="submit" color="primary">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
