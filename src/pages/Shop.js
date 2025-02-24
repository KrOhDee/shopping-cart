import { useState, useEffect, useRef } from 'react';
import ItemCard from '../components/ItemCard';
import CartModal from '../components/CartModal';
import { FaSearch } from 'react-icons/fa';
import { Alert } from 'react-bootstrap';
import useCartStore from '../store/useCartStore';
import './Shop.css';

export default function Shop() {
  const [items, setItems] = useState([]);
  const cartList = useCartStore((state) => state.cartList);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const alertTimeoutRef = useRef(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('An error occurred while fetching products:', error);
        setHasError(true);
      });
  }, []);

  function cartAdd(itemCart, id) {
    let item = itemCart.find((item) => item.id === id);
    addToCart(item);
  }

  function cartRemove(itemCart, id) {
    let item = itemCart.find((item) => item.id === id);
    removeFromCart(item);
  }

  function handleAddToCartClick() {
    setShowAlert(true);

    if (alertTimeoutRef.current) {
      clearTimeout(alertTimeoutRef.current);
    }

    alertTimeoutRef.current = setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const noResults = filteredItems.length === 0 && !isLoading;

  const shopList = filteredItems.map(
    ({ title, id, description, rating, image, price }) => (
      <ItemCard
        key={id}
        id={id}
        description={description}
        rating={rating.rate}
        image={image}
        price={price.toFixed(2)}
        title={title}
        items={items}
        cartAdd={cartAdd}
        alert={handleAddToCartClick}
      />
    )
  );

  return (
    <main>
      <div className='shop-bar'>
        <span className='shop-name'>PlanetRandomItems</span>
        <CartModal cartList={cartList} remove={cartRemove} />
      </div>
      <div
        style={{ position: 'sticky', top: 0, left: 0, right: 0, zIndex: '2' }}
      >
        {showAlert && (
          <Alert
            variant='success'
            onClose={() => setShowAlert(false)}
            dismissible
            style={{
              position: 'fixed',
              top: 60,
              left: 0,
              right: 0,
            }}
          >
            Item added to cart.
          </Alert>
        )}
      </div>
      <FaSearch className='search-icon' />
      <input
        type='text'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='Search items by name...'
        className='input'
      />
      {noResults && <p className='no-results-text'>No Results Found.</p>}

      <div className='shop-items'>{shopList}</div>
      {hasError && (
        <p>
          An error occurred while fetching products. Please try again later.
        </p>
      )}
      <span className='loading'>{isLoading && <h1>Loading...</h1>}</span>
    </main>
  );
}
