import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Signup = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" name="name" placeholder="Enter your name" />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
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
        Signup
      </Button>
    </Form>
  );
};

export default Signup;
