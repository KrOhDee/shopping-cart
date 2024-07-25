import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export default function CartModal({ cartList, remove }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  };

  let totalCost = 0;

  const cartSummary = cartList.map((item) => {
    totalCost += item.price * item.quantity;
    return (
      <div key={item.id}>
        <p>
          {item.title} x{item.quantity}
          <Button
            style={modalButtonStyle}
            id={item.id}
            size='sm '
            variant='dark'
            onClick={(e) => {
              remove(cartList, parseInt(e.target.id));
            }}
          >
            x
          </Button>
        </p>
        <p>${item.price}</p>
        <img style={modalImageStyle} src={item.image} alt='modal-img' />
        <br />
        <br />
        <br />
      </div>
    );
  });

  return (
    <>
      <Button variant='dark' onClick={handleShow}>
        Cart <FaShoppingCart />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartList.length === 0 && <p>Empty...</p>}
          {cartSummary}
          <p style={totalStyle}>Total: ${totalCost.toFixed(2)}</p>
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
