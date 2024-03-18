import React, { useState } from "react";

import { Container, Row, Col, Modal } from "react-bootstrap";
import CardProduct from "../../components/CardProduct";
import { products } from "../../utils/mocksData";
import Payment from "../Payment";

function Home() {
  const [show, setShow] = useState(false);

  return (
    <Container className="p-5 mb-4 rounded-3" data-testid="container-home">
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
        scrollable
        backdrop="static"
      >
        <Modal.Header closeButton>Card Data</Modal.Header>
        <Modal.Body>
          <Payment {...{ setShow }} />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Home;
