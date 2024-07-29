import { Button, Modal } from 'react-bootstrap';
import './DescriptionModal.css';

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
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {description} <br /> <br />{' '}
        <span className='align-rating'>
          {' '}
          <b>Rating</b>: {rating}{' '}
          <img
            className='rating-star'
            src='https://static.vecteezy.com/system/resources/thumbnails/001/189/165/small/star.png'
            alt='item being sold'
          />
        </span>{' '}
        <br />{' '}
        <img className='item-modal-image' src={image} alt='item being sold' />{' '}
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
          className='add-to-cart-button'
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
