import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Cards from './Cards';
import Modals from './Modals';

export default function Shop(props) {
  const [items, setItems] = useState([]);

  const [cart, setCart] = useState(0);

  const [cartList, setCartList] = useState([]);

  function addToCart() {
    setCart((prevCart) => prevCart + 1);
  }

  const addToCartList = (item, id) => {
    setCartList();
    console.log(cartList);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  console.log(items);

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
        key={item.id}
        id={item.id}
        image={item.image}
        price={item.price}
        title={item.title}
        setCart={setCart}
        addToCart={addToCart}
      />
    );
  });

  return (
    <div style={shopStyle}>
      <div
        style={navStyle}
        className="bg-dark w-100vw text-white d-flex justify-content-around align-items-center"
      >
        <span style={shopTextStyle}>Shop</span> <Modals cart={cart} />
      </div>
      <div style={itemsStyle}>{shopList}</div>
    </div>
  );
}
