import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export default function CartModal({ cartList, remove }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function truncateTitle(title) {
    const words = title.split(' ');
    if (words.length > 7) {
      return words.slice(0, 7).join(' ') + '...';
    }
    return title;
  }

  const modalImageStyle = {
    width: '50px',
  };

  const modalButtonStyle = {
    marginLeft: '10px',
  };

  const totalStyle = {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '5px',
    padding: '5px',
    fontSize: '1.2rem',
    marginBottom: '0',
    opacity: '80%',
  };

  let totalCost = 0;
  let totalQuantity = 0;

  const cartSummary = cartList.map(({ price, quantity, id, title, image }) => {
    totalCost += price * quantity;
    totalQuantity += quantity;

    return (
      <div key={id}>
        <p>
          {truncateTitle(title)} x{quantity}
          <Button
            style={modalButtonStyle}
            id={id}
            size='sm'
            variant='secondary'
            onClick={(e) => {
              remove(cartList, parseInt(e.target.id));
            }}
          >
            x
          </Button>
        </p>
        <p>${price}</p>
        <img style={modalImageStyle} src={image} alt='modal-img' />
        <br />
        <br />
        <br />
      </div>
    );
  });

  return (
    <>
      <Button variant='dark' onClick={handleShow}>
        <FaShoppingCart /> Cart
        <span className='cart-quantity'>({totalQuantity})</span>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Items In Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartList.length === 0 && <p>Cart is empty.</p>}
          {cartSummary}
          {cartList.length > 0 && (
            <p style={totalStyle}>Total: ${totalCost.toFixed(2)}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button style={{ border: '1px solid black' }} variant='light'>
            Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
