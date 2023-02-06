import { Card, Button } from 'react-bootstrap';

export default function Cards(props) {
  const cardStyle = {
    display: 'inline-block',
    width: '300px',
  };

  const bodyStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70%',
    position: 'relative',
    overflow: 'hidden',
  };

  const footerStyle = {
    bottom: 0,
    width: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '20px',
  };

  const buttonStyle = {
    marginLeft: '80px',
    maxHeight: '30px',
    maxWidth: '300px',
  };

  const priceStyle = {
    width: '80px',
  };

  return (
    <Card style={cardStyle}>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body style={bodyStyle}>
        <img className="item--img" src={props.image} alt="item being sold" />
      </Card.Body>
      <br />
      <br />
      <br />
      <Card.Footer style={footerStyle}>
        <Card.Text className="my-1" style={priceStyle}>
          ${props.price}
        </Card.Text>
        <Button
          onClick={() => {
            props.carto(props.items, props.id);
          }}
          id={props.id}
          style={buttonStyle}
          size="sm"
        >
          Add To Cart
        </Button>
      </Card.Footer>
    </Card>
  );
}
