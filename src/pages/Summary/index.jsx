import React, { useState } from "react";

import { Container, Row, Col, Modal, Button, Accordion } from "react-bootstrap";
import Payment from "../Payment";
import { useDispatch, useSelector } from "react-redux";
import { resetCardState } from "../../redux/cardSlice";
import { resetProductState } from "../../redux/productSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Summary() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.product);
  const [show, setShow] = useState(false);

  const handleConfirm = () => {
    toast("Order processed", {
      type: "success",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
    dispatch(resetCardState());
    dispatch(resetProductState());
    navigate("/");
  };

  return (
    <Container className="p-5 mb-4 rounded-3" data-testid="container-summary">
      <h1 className="header mb-5">Summary </h1>

      {product?.id && (
        <>
          <Accordion
            defaultActiveKey={["0"]}
            alwaysOpen
            data-testid="wrapper-accordion"
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Product</Accordion.Header>
              <Accordion.Body>
                <h5>Name: {product?.name}</h5>
                <h5>Price: {product?.price}</h5>
                <h5>Description: {product?.description}</h5>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Payment</Accordion.Header>
              <Accordion.Body>
                <Payment disableButtons {...{ setShow }} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Button
            className="mt-5"
            variant="primary"
            onClick={handleConfirm}
            data-testid="button-confirm"
          >
            Confirm
          </Button>

          <Modal
            show={show}
            onHide={() => setShow(false)}
            size="xl"
            animation={false}
            scrollable
            backdrop="static"
          >
            <Modal.Header closeButton>Card Data</Modal.Header>
            <Modal.Body>
              <Payment {...{ setShow }} />
            </Modal.Body>
          </Modal>
        </>
      )}
    </Container>
  );
}

export default Summary;
