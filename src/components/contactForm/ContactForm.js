import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ContactForm = props => {
  return (
    <Form action='#'>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for='exampleEmail'>Email</Label>
            <Input type='email' placeholder='email' required />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for='examplePassword'>Password</Label>
            <Input type='password' placeholder='password' required />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for='exampleAddress'>Address</Label>
        <Input type='text' placeholder='1234 Main St' />
      </FormGroup>
      <FormGroup>
        <Label for='exampleAddress2'>Address 2</Label>
        <Input type='text' placeholder='Apartment, studio, or floor' />
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for='exampleCity'>City</Label>
            <Input type='text' />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for='exampleState'>State</Label>
            <Input type='text' />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for='exampleZip'>Zip</Label>
            <Input type='text' />
          </FormGroup>
        </Col>
      </Row>
      <Button>Submit</Button>
    </Form>
  );
};
export default ContactForm;
