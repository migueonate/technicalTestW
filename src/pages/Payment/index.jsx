import React, { useState } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Payment() {
  const [form, setForm] = useState({});

  const handleSubmit = () => {
    console.log("values-->>", form);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          onChange={handleChange}
        />
      </Form.Group>

      <h5>DATOS DE LA TARJETA</h5>

      <Button variant="primary" type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default Payment;
