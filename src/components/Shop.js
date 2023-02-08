import { useState, useEffect } from 'react';
import Cards from './Cards';
import Modals from './Modals';
import { FaShoppingCart } from 'react-icons/fa';

export default function Shop() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState(0);
  const [cartList, setCartList] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  const shopList = items.map((item) => {
    return (
      <Cards
        item={item}
        key={item.id}
        id={item.id}
        image={item.image}
        price={item.price}
        title={item.title}
        items={items}
        carto={carto}
      />
    );
  });

  return (
    <>
      <div style={shopBarStyle}>
        <span style={shopTextStyle}>
          PlanetRandomItems <FaShoppingCart />
        </span>
        <Modals
          cartList={cartList}
          cart={cart}
          items={items}
          remove={cartoRemove}
        />
      </div>
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
