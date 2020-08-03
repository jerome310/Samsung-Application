import React, { useState } from "react";
import Products from "./Products";
import "./App.css";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

const App = () => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const renderCart = () => (
    <div className="cart-header">
      <h1>Shopping Cart</h1>
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>
      <span className="total">
        <h3>Total: ${totalAmount}</h3>
      </span>
    </div>
  );

  const totalAmount = cart.reduce(
    (acc, curr) => acc + parseFloat(curr.price.replace("$", "")),
    0
  );

  return (
    <div className="App">
      <header>
        <a href="/src/App.js">
          <h1>Samsung</h1>
        </a>
        <div className="buttons">
          <span className="phone-icon">
            <i
              class="fas fa-home"
              onClick={() => navigateTo(PAGE_PRODUCTS)}
            ></i>
          </span>
          <span>
            <i
              className="fas fa-shopping-cart"
              onClick={() => navigateTo(PAGE_CART)}
            ></i>
          </span>
          <span>{cart.length}</span>
        </div>
      </header>
      {page === PAGE_PRODUCTS && <Products addToCart={addToCart} />}
      {page === PAGE_CART && renderCart()}
      <div className="footer">
        <div className="span1">
          <span>©2020 SAMSUNG</span>
        </div>
        <div className="span2">
          <span>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-youtube"></i>
            <i class="fas fa-envelope"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
