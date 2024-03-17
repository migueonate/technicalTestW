import React, { useState } from "react";

import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import CardProduct from "../../components/CardProduct";
import { products } from "../../utils/mocksData";
import Payment from "../Payment";

function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="p-5 mb-4 rounded-3">
      <h1 className="header mb-5">Welcome </h1>
      <Row>
        {products.map((item) => (
          <Col key={item.name}>
            <CardProduct {...{ item, setShow }} />
          </Col>
        ))}
      </Row>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        animation={false}
      >
        <Modal.Body>
          <Payment />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Home;
