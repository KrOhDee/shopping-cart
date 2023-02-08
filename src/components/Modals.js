import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function Modals(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modalImageStyle = {
    width: '50px',
  };

  const modalButtonStyle = {
    marginLeft: '10px',
  };

  const cartSummary = props.cartList.map((item) => {
    return (
      <div key={item.id}>
        <p>
          {item.title} x{item.quantity}
          <Button
            style={modalButtonStyle}
            id={item.id}
            size="sm "
            variant="dark"
            onClick={(e) => {
              console.log('e.target ');
              props.remove(props.cartList, parseInt(e.target.id));
            }}
          >
            x
          </Button>
        </p>
        <p>${item.price}</p>
        <img style={modalImageStyle} src={item.image} alt="modal-img" />
        <br />
        <br />
        <br />
      </div>
    );
  });

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Cart {props.cart > 0 && `(${props.cart})`}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.cartList.length === 0 && <p>Empty...</p>}
          {cartSummary}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{ border: '1px solid black' }} variant="light">
            Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
