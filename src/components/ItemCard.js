import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import DescriptionModal from './DescriptionModal';
import './ItemCard.css';

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
      <Card className='card'>
        <Card.Header className='card-header' onClick={handleCardClick}>
          {truncateTitle(title)}
        </Card.Header>
        <Card.Body className='card-body' onClick={handleCardClick}>
          <img className='item-image' src={image} alt='item being sold' />
        </Card.Body>
        <br />
        <br />
        <br />
        <Card.Footer className='card-footer'>
          <Card.Text className='price'>${price}</Card.Text>
          <Button
            onClick={() => {
              cartAdd(items, id);
              alert();
            }}
            id={id}
            className='add-to-cart'
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
