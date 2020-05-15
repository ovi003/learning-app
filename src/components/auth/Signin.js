import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from "react-router-dom";

const Signin = () => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/dashboard");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Username</Label>
        <Input type="email" name="username" placeholder="Enter your email" />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </FormGroup>
      <Button type="submit" block color="primary">
        Signin
      </Button>
    </Form>
  );
};

export default Signin;
