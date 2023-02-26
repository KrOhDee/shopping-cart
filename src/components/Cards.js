import { Card, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

export default function Cards(props) {
  const [showModal, setShowModal] = useState(false);

  function handleCardClick() {
    setShowModal(!showModal);
  }

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
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Description: {props.description} <br /> {props.rating} <br />{' '}
          <img style={itemImageStyle} src={props.image} alt="item being sold" />{' '}
          <br /> Price: {props.price} <br />
        </Modal.Body>
      </Modal>
      <Card style={cardStyle}>
        <Card.Header onClick={handleCardClick}>{props.title}</Card.Header>
        <Card.Body onClick={handleCardClick} style={bodyStyle}>
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
    </>
  );
}
