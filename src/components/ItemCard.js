import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import DescriptionModal from './DescriptionModal';

export default function ItemCard({
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

  function truncateTitle(title) {
    const words = title.split(' ');
    if (words.length > 4) {
      return words.slice(0, 4).join(' ') + '...';
    }
    return title;
  }

  const cardStyle = {
    display: 'inline-block',
    width: '80%',
    height: '100%',
  };

  const cardBodyStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px',
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
    justifyContent: 'space-around',
    fontSize: '20px',
  };

  const buttonStyle = {
    marginLeft: '80px',
    border: '1px solid black',
    whiteSpace: 'nowrap',
  };

  const priceStyle = {
    width: '80px',
    marginBottom: '1px',
  };

  const itemImageStyle = {
    width: '30%',
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
          {truncateTitle(title)}
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
            className='add-to-cart'
            style={buttonStyle}
            variant='light'
            size='md'
          >
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}
