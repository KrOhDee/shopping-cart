import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function Modals(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cartSummary = props.cartList.map((item) => {
    return (
      <>
        <p>
          {item.title} x{item.quantity}
          <Button className="mx-3" size="sm " variant="danger">
            x
          </Button>
        </p>
        <p>${item.price}</p>
        <img className="modal--img" src={item.image} alt="modal-img" />
        <br />
        <br />
        <br />
      </>
    );
  });

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cart ({props.cart})
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>{cartSummary}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Purchase</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
