import { Card, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import DescriptionModal from './DescriptionModal';

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
      <DescriptionModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleCardClick={handleCardClick}
        id={id}
        description={description}
        rating={rating}
        image={image}
        price={price}
        title={title}
        items={items}
        cartAdd={cartAdd}
        alert={alert}
      />
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
