import { Card, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

export default function Cards({
  id,
  description,
  rating,
  image,
  price,
  title,
  items,
  cartAdd,
  alert,
}) {
  const [showModal, setShowModal] = useState(false);

  function handleCardClick() {
    setShowModal(!showModal);
  }

  const cardStyle = {
    display: 'inline-block',
    width: '300px',
  };

  const cardBodyStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70%',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
  };

  const cardHeaderStyle = {
    cursor: 'pointer',
  };

  const alignRatingStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
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

  const itemModalImageStyle = {
    maxWidth: '30%',
    padding: '10px',
    marginBottom: '10px',
  };

  const ratingStarStyle = {
    maxWidth: '3%',
  };

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {description} <br /> <br />{' '}
          <span style={alignRatingStyle}>
            {' '}
            <b>Rating</b>: {rating}{' '}
            <img
              style={ratingStarStyle}
              src='https://static.vecteezy.com/system/resources/thumbnails/001/189/165/small/star.png'
              alt='item being sold'
            />
          </span>{' '}
          <br />{' '}
          <img style={itemModalImageStyle} src={image} alt='item being sold' />{' '}
          <br />{' '}
          <span>
            <b>Price</b>: ${price}{' '}
          </span>{' '}
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCardClick}>
            Close
          </Button>
          <Button
            style={{ border: '1px solid black' }}
            onClick={() => {
              cartAdd(items, id);
              alert();
            }}
            id={id}
            variant='light'
          >
            Add To Cart
          </Button>
        </Modal.Footer>
      </Modal>
      <Card style={cardStyle}>
        <Card.Header style={cardHeaderStyle} onClick={handleCardClick}>
          {title}
        </Card.Header>
        <Card.Body onClick={handleCardClick} style={cardBodyStyle}>
          <img style={itemImageStyle} src={image} alt='item being sold' />
        </Card.Body>
        <br />
        <br />
        <br />
        <Card.Footer style={footerStyle}>
          <Card.Text style={priceStyle}>${price}</Card.Text>
          <Button
            onClick={() => {
              cartAdd(items, id);
              alert();
            }}
            id={id}
            style={buttonStyle}
            variant='light'
            size='sm'
          >
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}
