import { useState, useEffect, useRef } from 'react';
import ItemCard from '../components/ItemCard';
import CartModal from '../components/CartModal';
import { FaSearch } from 'react-icons/fa';
import { Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions';

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

  // add to cart
  function cartAdd(itemCart, id) {
    let item = itemCart.find((item) => item.id === id);
    dispatch(addToCart(item));
  }
  // remove from cart
  function cartRemove(itemCart, id) {
    let item = itemCart.find((item) => item.id === id);
    dispatch(removeFromCart(item));
  }

  function handleAddToCartClick() {
    console.log('handleAddToCartClick');
    setShowAlert(true);

    // check if alert timer, if so clear it
    if (alertTimeoutRef.current) {
      clearTimeout(alertTimeoutRef.current);
    }

    // set new timer
    alertTimeoutRef.current = setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }

  const shopBarStyle = {
    height: '60px',
    position: 'sticky',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100vw',
    color: 'white',
    top: 0,
    zIndex: 1,
    marginBottom: '30px',
    backgroundColor: 'black',
    opacity: '90%',
  };

  // const itemCartStyle = {
  //   display: 'grid',
  //   gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  //   gridGap: '16px',
  //   paddingLeft: '35px',
  // };

  const shopTextStyle = {
    fontSize: '30px',
  };

  const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
  };

  const inputStyle = {
    width: '240px',
    height: '30px',
    borderRadius: '10px',
    padding: '5px',
    marginBottom: '20px',
    marginLeft: '5px',
    outline: 'none',
    border: '1px solid black',
  };

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //true when filtered items is 0 and items are done loading in
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
    <>
      <div style={shopBarStyle}>
        <span style={shopTextStyle}>PlanetRandomItems</span>
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
      <FaSearch style={{ marginLeft: '35px' }} />
      <input
        type='text'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='Search items by name...'
        style={inputStyle}
      />
      {noResults && (
        <p
          style={{
            textAlign: 'center',
            color: 'red',
            fontSize: '24px',
            border: 'dashed 1px black',
            padding: '5px',
          }}
        >
          No Results Found.
        </p>
      )}

      <div className='shop-items'>{shopList}</div>
      {hasError && (
        <p>
          An error occurred while fetching products. Please try again later.
        </p>
      )}
      <span style={loadingStyle}>{isLoading && <h1>Loading...</h1>}</span>
    </>
  );
}
