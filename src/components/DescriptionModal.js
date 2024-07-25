import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const DescriptionModal = ({
  showModal,
  setShowModal,
  handleCardClick,
  id,
  description,
  rating,
  image,
  price,
  title,
  items,
  cartAdd,
  alert,
}) => {
  const alignRatingStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
  };

  const itemModalImageStyle = {
    width: '30%',
    padding: '10px',
    marginBottom: '10px',
  };

  const ratingStarStyle = {
    maxWidth: '3%',
  };

  return (
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
  );
};

export default DescriptionModal;
