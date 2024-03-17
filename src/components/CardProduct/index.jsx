import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./styles.css";

function CardProduct({ item, setShow }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img className="image" variant="top" src={item.imageUrl} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>

        <Card.Text className="descriptionContainer">
          {item.description}
        </Card.Text>

        <Card.Text className="font-weight-bold">{`$ ${item.price}`}</Card.Text>
        <Button variant="outline-primary" onClick={() => setShow(true)}>
          Pay with credit card
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;
