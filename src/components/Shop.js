import { useState, useEffect } from 'react';
import Cards from './Cards';
import Modals from './Modals';
import { FaSearch } from 'react-icons/fa';
import { Alert } from 'react-bootstrap';

export default function Shop() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState(0);
  const [cartList, setCartList] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAlert, setShowAlert] = useState(false);

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

  //add to cart
  function carto(itemss, id) {
    let item = itemss.find((item) => item.id === id);
    let updatedCartList = [...cartList];
    let existingItemIndex = updatedCartList.findIndex((i) => i.id === item.id);
    if (existingItemIndex !== -1) {
      updatedCartList[existingItemIndex].quantity += 1;
    } else {
      item.quantity = 1;
      updatedCartList.push(item);
    }
    setCartList(updatedCartList);
    setCart((prevCart) => prevCart + 1);
  }
  //remove from cart
  function cartoRemove(itemss, id) {
    let item = itemss.find((item) => item.id === id);

    let existingItemIndex = cartList.findIndex((i) => i.id === item.id);
    if (existingItemIndex !== -1) {
      let updatedCartItem = { ...cartList[existingItemIndex] };
      updatedCartItem.quantity -= 1;
      if (updatedCartItem.quantity === 0) {
        cartList.splice(existingItemIndex, 1);
      } else {
        cartList[existingItemIndex] = updatedCartItem;
      }
    }
    setCart((prevCart) => prevCart - 1);
    setCartList((prevCartList) => [...prevCartList]);
  }

  function handleAddToCartClick() {
    console.log('handleAddToCartClick');
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
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
  };

  const itemsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridGap: '16px',
    paddingLeft: '35px',
  };

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
    width: '300px',
    height: '30px',
    borderRadius: '10px',
    padding: '5px',
    marginLeft: '35px',
    marginBottom: '20px',
    marginRight: '5px',
    outline: 'none',
    border: '1px solid black',
  };

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const noResults = filteredItems.length === 0 && !isLoading;

  const shopList = filteredItems.map((item) => {
    return (
      <Cards
        item={item}
        key={item.id}
        id={item.id}
        description={item.description}
        rating={item.rating.rate}
        image={item.image}
        price={item.price.toFixed(2)}
        title={item.title}
        items={items}
        carto={carto}
        alert={handleAddToCartClick}
      />
    );
  });

  return (
    <>
      <div style={shopBarStyle}>
        <span style={shopTextStyle}>PlanetRandomItems</span>
        <Modals
          cartList={cartList}
          cart={cart}
          items={items}
          remove={cartoRemove}
        />
      </div>
      <div
        style={{ position: 'sticky', top: 0, left: 0, right: 0, zIndex: '2' }}
      >
        {showAlert && (
          <Alert
            variant="success"
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
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search items by name..."
        style={inputStyle}
      />
      <FaSearch />
      {noResults && (
        <p style={{ marginLeft: '35px', color: 'red' }}>No results found</p>
      )}

      <div style={itemsStyle}>{shopList}</div>
      {hasError && (
        <p>
          An error occurred while fetching products. Please try again later.
        </p>
      )}
      <span style={loadingStyle}>{isLoading && <h1>Loading...</h1>}</span>
    </>
  );
}
