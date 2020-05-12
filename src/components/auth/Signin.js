import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Signin = () => {
  return (
    <Form>
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
