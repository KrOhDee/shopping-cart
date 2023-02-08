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
    border: '1px solid black',
  };

  const priceStyle = {
    width: '80px',
    marginBottom: '1px',
  };

  const itemImageStyle = {
    maxWidth: '50%',
  };

  return (
    <Card style={cardStyle}>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body style={bodyStyle}>
        <img style={itemImageStyle} src={props.image} alt="item being sold" />
      </Card.Body>
      <br />
      <br />
      <br />
      <Card.Footer style={footerStyle}>
        <Card.Text style={priceStyle}>${props.price}</Card.Text>
        <Button
          onClick={() => {
            props.carto(props.items, props.id);
          }}
          id={props.id}
          style={buttonStyle}
          variant="light"
          size="sm"
        >
          Add To Cart
        </Button>
      </Card.Footer>
    </Card>
  );
}
