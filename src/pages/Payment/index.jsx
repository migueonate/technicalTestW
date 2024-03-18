import React, { useState } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Cards from "react-credit-cards-2";
import { useDispatch, useSelector } from "react-redux";
import { updateCardField } from "../../redux/cardSlice";
import { useNavigate } from "react-router-dom";

function Payment({ disableButtons, setShow }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useSelector((state) => state.card);

  const [focus, setFocus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateCardField({ field: name, value }));
  };

  const handleSubmit = () => {
    if (disableButtons) {
      setShow(true);
    } else {
      setShow(false);
      navigate("/summary");
    }
  };

  const handleInputFocus = (evt) => {
    setFocus(evt.target.name);
  };

  return (
    <>
      <Form className="p-3" data-testid="container-form">
        <Cards
          name={form.nameCard}
          number={form.number}
          expiry={`${form.month}/${form.year}`}
          cvc={form.cvc}
          focused={focus}
        />
        <Form.Group className="mb-3">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 55.., 4111.., 37.., 36.. "
            name="number"
            onChange={handleChange}
            onFocus={handleInputFocus}
            value={form.number}
            disabled={disableButtons}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Month</Form.Label>
            <Form.Select
              defaultValue={"Choose..."}
              name="month"
              onChange={handleChange}
              onFocus={handleInputFocus}
              value={form.month}
              disabled={disableButtons}
            >
              <option disabled>Choose...</option>
              <option>02</option>
              <option>03</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Year</Form.Label>
            <Form.Select
              name="year"
              defaultValue={"Choose..."}
              onChange={handleChange}
              onFocus={handleInputFocus}
              value={form.year}
              disabled={disableButtons}
            >
              <option disabled>Choose...</option>
              <option>24</option>
              <option>25</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} xs={7}>
            <Form.Label>CVC</Form.Label>
            <Form.Control
              type="number"
              placeholder="CVC"
              name="cvc"
              onChange={handleChange}
              onFocus={handleInputFocus}
              value={form.cvc}
              disabled={disableButtons}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Card Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="nameCard"
            onChange={handleChange}
            onFocus={handleInputFocus}
            value={form.nameCard}
            disabled={disableButtons}
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Type</Form.Label>
            <Form.Select
              defaultValue="C.C"
              name="idType"
              onChange={handleChange}
              onFocus={handleInputFocus}
              value={form.idType}
              disabled={disableButtons}
            >
              <option>C.C</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} xs={10}>
            <Form.Label>Document</Form.Label>
            <Form.Control
              type="number"
              placeholder="Write document"
              name="id"
              onChange={handleChange}
              onFocus={handleInputFocus}
              value={form.id}
              disabled={disableButtons}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Installments</Form.Label>
          <Form.Control
            type="number"
            placeholder="Installments"
            name="installments"
            onChange={handleChange}
            onFocus={handleInputFocus}
            value={form.installments}
            disabled={disableButtons}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="button"
          onClick={handleSubmit}
          data-testid="submit-button"
        >
          {disableButtons ? "Edit" : "Save"}
        </Button>
      </Form>
    </>
  );
}

export default Payment;
