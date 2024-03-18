import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./styles.css";
import { selectProduct } from "../../redux/productSlice";
import { useDispatch } from "react-redux";

function CardProduct({ item, setShow }) {
  const dispatch = useDispatch();
  const handleProductSelect = (item) => {
    dispatch(selectProduct(item));
  };

  return (
    <Card
      className="mb-3"
      style={{ width: "18rem" }}
      data-testid="container-card-product"
    >
      <Card.Img
        className="image"
        variant="top"
        src={item.imageUrl}
        data-testid="card-image"
      />
      <Card.Body>
        <Card.Title data-testid="card-title">{item.name}</Card.Title>

        <Card.Text
          className="descriptionContainer"
          data-testid="card-description"
        >
          {item.description}
        </Card.Text>

        <Card.Text
          className="font-weight-bold"
          data-testid="card-price"
        >{`$ ${item.price}`}</Card.Text>
        <Button
          variant="outline-primary"
          onClick={() => {
            handleProductSelect(item);
            setShow(true);
          }}
          data-testid="card-button-pay"
        >
          Pay with credit card
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;
