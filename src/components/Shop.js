import { useState, useEffect } from 'react';
import Cards from './Cards';
import Modals from './Modals';
import { FaShoppingCart } from 'react-icons/fa';

export default function Shop(props) {
  const [items, setItems] = useState([]);

  const [cart, setCart] = useState(0);

  const [cartList, setCartList] = useState([]);

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => {
        console.error('An error occurred while fetching products:', error);
        setHasError(true);
      });
  }, []);

  console.log(items);

  function carto(itemss, id) {
    let item = itemss.find((item) => item.id === id);
    if (cartList.includes(item)) {
      item.quantity += 1;
    } else {
      item.quantity = 1;
      cartList.push(item);
    }
    setCart((prevCart) => prevCart + 1);
    console.log(cartList);
  }

  function cartoRemove(itemss, id) {
    console.log('itemss: ', itemss);
    let item = itemss.find((item) => item.id === id);
    console.log('item: ', item);
    console.log('id: ', id);
    if (cartList.includes(item)) {
      let cartItem = cartList.find((cartItem) => cartItem.id === id);
      cartItem.quantity -= 1;
      if (cartItem.quantity === 0) {
        let index = cartList.indexOf(cartItem);
        cartList.splice(index, 1);
      }
    }
    setCart((prevCart) => prevCart - 1);
    console.log('cartList: ', cartList);
  }

  const shopStyle = {
    backgroundColor: 'white',
  };

  const navStyle = {
    height: '60px',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    marginBottom: '30px',
  };

  const itemsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridGap: '16px',
    padding: '20px',
  };

  const shopTextStyle = {
    fontSize: '30px',
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
    <div style={shopStyle}>
      <div
        style={navStyle}
        className="bg-dark w-100vw text-white d-flex justify-content-around align-items-center"
      >
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
    </div>
  );
}
