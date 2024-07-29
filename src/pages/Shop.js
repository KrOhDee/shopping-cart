import { useState, useEffect, useRef } from 'react';
import ItemCard from '../components/ItemCard';
import CartModal from '../components/CartModal';
import { FaSearch } from 'react-icons/fa';
import { Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions';
import './Shop.css';

export default function Shop() {
  const [items, setItems] = useState([]);
  const cartList = useSelector((state) => state.cart.cartList);
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

  const dispatch = useDispatch();

  function cartAdd(itemCart, id) {
    let item = itemCart.find((item) => item.id === id);
    dispatch(addToCart(item));
  }

  function cartRemove(itemCart, id) {
    let item = itemCart.find((item) => item.id === id);
    dispatch(removeFromCart(item));
  }

  function handleAddToCartClick() {
    console.log('handleAddToCartClick');
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
    ({ title, id, description, rating, image, price }) => {
      return (
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
      );
    }
  );

  return (
    <main>
      <div className='shop-bar'>
        <span className='shop-name'>PlanetRandomItems</span>
        <CartModal cartList={cartList} remove={cartRemove} />
      </div>
      <div className='alert-div'>
        {showAlert && (
          <Alert
            variant='success'
            onClose={() => setShowAlert(false)}
            dismissible
            className='fixed-alert'
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
